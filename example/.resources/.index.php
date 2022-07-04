<html>
<?php 

function isRegex($str0) {
	$regex = "/^\/[\s\S]+\/$/";
	return preg_match($regex, $str0);
}
function matchall($match,$name) { return true; }

/**
 * Renders a link.
 */
function bookmark($url,$name,$target="_blank",$opentag="<td>",$closetag="</td>")
{
        $ret = "";
	if ( $opentag != "" ) $ret .= $opentag;
	$encurl = $url;
	$ret .= "[<a href=\"$encurl\" target=\"$target\">$name</a>]";
	if ( $closetag != "" ) $ret .= $closetag;
        return $ret;
}

function resource($url,$name)
{
         return bookmark($url, $name, "_blank", "", "");
}


/**
 * Reads a list of links from a file and renders them.
 *
 * The expected file format is
 * url && linkname 
 */
function get_bookmarks($filename,$target="_blank",$rowlen=12,$opentable="<table>",$closetable="</table>",$openrow="<tr>",$closerow="</tr>",$opencell="<td>",$closecell="</td>")
{
	$file = file_get_contents($filename);
	$bookmarks=split("\n",$file);
  
        $ret = $opentable;
        $n = 1;
        foreach( $bookmarks as $bm ) {
                 if( $bm == "" ) { continue; }
		 list($url,$name) = split("[ ]*&&[ ]*",$bm);
        	 if( ! empty($url) ) {
      	     	     if( $rowlen > 0 && $n % $rowlen == 1 ) { $ret .= $openrow; }
     	     	     $ret .= bookmark( $url, $name, $target, $opencell, $closecell );
      	     	     if( $rowlen > 0 && $n % $rowlen == 0 ) { $ret .= $closerow; }
      	     	     $n++;
        	 }
        }
        if( $rowlen > 0 && $n % $rowlen != 1 ) { $ret .= $closerow; }
        $ret .= $closetable;
        return $ret;
}


$jsroot_instance = "/jsroot";
$pruned_uri = $_SERVER['REQUEST_URI'];
if( $_SERVER['QUERY_STRING'] ) {
	$pos = strpos($_SERVER['REQUEST_URI'], $_SERVER['QUERY_STRING']);
	$pruned_uri = substr($_SERVER['REQUEST_URI'],0,$pos-1);
}
$folder = str_replace($_SERVER['DOCUMENT_ROOT'], "", str_replace(".index.php","",$pruned_uri));
$script_path = substr_replace(dirname($_SERVER["SCRIPT_FILENAME"]), $_SERVER['CONTEXT_PREFIX'], 0, strlen($_SERVER['CONTEXT_DOCUMENT_ROOT']));
$target_folder = substr_replace($pruned_uri, $_SERVER['CONTEXT_DOCUMENT_ROOT'], 0, strlen($_SERVER['CONTEXT_PREFIX']));
$script_path = str_replace("//","/","/".$script_path);
$script_path = rtrim($script_path, '/');
chdir( $target_folder  )
?>

<link rel="stylesheet" type="text/css" href="<?php echo $script_path."/.resources/theme.css"; ?>" />
<link rel="stylesheet" type="text/css" href="<?php echo $script_path."/.resources/style.css"; ?>" />
<script language="javascript" type="text/javascript" src="<?php echo $script_path."/.resources/jquery.js" ?>" ></script>
<script language="javascript" type="text/javascript" src="<?php echo $script_path."/.resources/jquery-ui.js" ?>" ></script>
<script language="javascript" type="text/javascript" src="<?php echo $script_path."/.resources/style.js" ?>" ></script>
<script language="javascript" type="text/javascript">
$(function() {
          $(".numbers-row").append('<span class="button">+</span>&nbsp;&nbsp;<span class="button">-</span>');
          $(".button").click( function() {

                                  var $button = $(this);
                                  var oldValue = $button.parent().find("input").val();

                                  if ($button.text() == "+") {
                                          var newVal = parseFloat(oldValue) + 1;
                                  } else {
                                          if (oldValue > 0) {
                                                  var newVal = parseFloat(oldValue) - 1;
                                          } else {
                                                  newVal = 0;
                                          }
                                  }

                                  $button.parent().find("input").val(newVal);
                                  $button.parent().parent().find("input").click();

                          });
});
</script>

<head>

</head>

<body>
<br>
<?php
print "<div class=\"dirlinks\">\n";
print "<h1 align='center'>/".substr($folder,1,-1)." @ ".$_SERVER['SERVER_NAME']."</h1>\n";
if ( !in_array($pruned_uri, ['/lkang/','/'], true ) ) {
    print "<h3 align='center'><a href=\"../\">[ <span>&#8679;</span> parent directory <span>&#8679;</span> ]</a></h3>\n";
}
print "</div>\n";
?>
<br>
<hr>
<?php
$has_subs = false;
$folders = array();
$allfiles = glob("*");
foreach (array_reverse($allfiles) as $filename) {
	if (is_dir($filename)) {
        if ($filename != '.resources') {
		    $has_subs = true;
		    array_push( $folders, $filename);
        }
	}
}

print "<div class=\"dirlinks\">\n";
print "<h2>Subfolders\n";
print "</h2>\n";
if ($has_subs) {
    foreach ($folders as $filename) {
	    print "<a href=\"$filename\">[$filename]</a>";
    }
}
else {
    print "<a>[none]</a>";
}
print "</div>\n";

foreach (array("00_README.txt", "README.txt", "readme.txt") as $readme) {
    if (file_exists($readme)) {
        print "<pre class='readme'>\n"; readfile($readme); print "</pre>";
    }
}

$bookm="";
foreach (array("bookmarks.txt") as $bm) {
    if (file_exists($bm)) {
	    if( $bookm == "" ) {
		    $bookm .= '<h2><a name="bookmarks">Bookmarks</a></h2>';
	    }
	    $bookm .= get_bookmarks($bm,"",10,"","","","<br/>","","");
    }
}
if( $bookm != "" ) {
    print "<div class=\"dirlinks\">\n";
    print $bookm;
    print "</div>";
}

?>
<br>
<hr>
<?php
print "<div class=\"dirlinks\">\n";
print "<h2>Plots\n";
if ($has_subs) {
    if( ! $_GET['depth'] || intval($_GET['depth']<2) ) {
	    print "<a href=\"?".$_SERVER['QUERY_STRING']."&depth=2\">(show plots in subfolders)</a>\n";
    } else {
	    print "<a href=\"?".$_SERVER['QUERY_STRING']."&depth=1\">(hide plots in subfolders)</a>\n";
    }
}
print "</h2>\n";
print "</div>\n";
?>
<p>
<div class="numbers-row">
<label for="name">Levels to show</label>
<input name="depth" type="text" size="1" value="<?php if (isset($_GET['depth'])) { print htmlspecialchars($_GET['depth']); } else { print 1; } ?>" />
</div>
<form>Filter: <input type="text" name="match" size="50" value="<?php if (isset($_GET['match'])) print htmlspecialchars($_GET['match']);  ?>" />
<input type="Submit" value="Go" />
</form></p>
<div id="piccont">
<?php
$matchf = matchall;
$match = "";
if( isset($_GET['match']) ) {
	$match = $_GET['match'];
	if ( isRegex($match) ) {
		$matchf = preg_match;
		$match = $match;
	} else {
		$matchf = fnmatch;
		$match = '*'.$match.'*';
	}
}
$displayed = array();
if ($_GET['noplots']) {
    print "Plots will not be displayed.\n";
} else {
	$other_exts = array('.pdf', '.cxx', '.eps', '.ps', '.root', '.txt', '.C', '.html');
	$main_exts = array('.png','.gif','.jpg','.jpeg');
	$folders = array('*');
	if( intval($_GET['depth'])>1 ) {
		$wildc="*";
		for( $de=2; $de<=intval($_GET['depth']); $de++ ){
			$wildc = $wildc."/*";
			array_push( $folders, $wildc );
		}
	}
	$filenames = array();
	foreach ($folders as $fo) {
		foreach ($main_exts as $ex ) {
			$filenames = array_merge($filenames, glob($fo.$ex));
		}
	}
	sort($filenames);
	foreach ($filenames as $filename) {
		if( ! $matchf($match,$filename) ) { continue; }
		$path_parts = pathinfo($filename);
		if (PHP_VERSION_ID < 50200) {
			$path_parts['filename'] = str_replace('.'.$path_parts['extension'],"",$path_parts['basename']);
		}
		if( fnmatch("*_thumb", $path_parts['filename']) ) {
			continue;
		}
		$skip = false;
		foreach ($main_exts as $ex ){
			$other_filename=$path_parts['filename'].$ex;
			if( $other_filename == $path_parts['basename'] ) {
				break;
			} else if ( file_exists($other_filename) ) { 
				$skip = true;
				break;
			}
		}
		if( $skip ) { continue; }
		array_push($displayed, $filename);
		$others = array();
		$max=25;
		$asym=2;
		$len=strlen($filename);
		if ($len >= $max) {
			$short_filename=substr($filename, 0, $max/2-$asym). "..." .substr($filename, $len-1-$max/2-$asym,$len-1);
		} else {
			$short_filename=$filename;
		}
		$imgname=$path_parts['filename']."_thumb.".$path_parts['extension'];		
		if( !file_exists($imgname) ) {
			$imgname = $filename;
		} else {
			array_push($others, "<a class=\"file\" href=\"$filename\">[high res]</a>");
		}
		print "<div class='pic'>\n";
		print "<h3><a href=\"$filename\">$short_filename</a></h3>";
		print "<img src=\"$imgname\" style=\"border: none; width: 50ex; \">";
		foreach ($other_exts as $ex) {
            $other_filename = $path_parts['filename'].$ex;
                if (file_exists($other_filename)) {
                    switch ($ex) {
                        case '.txt':
					        $text = file_get_contents($other_filename);
					        array_push($others, "<span class=\"txt\"><a class=\"file\" href=\"$other_filename\">[" . $ex . "]</a><span class=\"txt_cont\">". $text ."</span></span>");
                            break;
                        case '.root':
                            array_push($others, "<a href=$jsroot_instance?file=$folder$other_filename>[" . $ex . "]</a>");
                            array_push($displayed, $other_filename);
                            break;
                        default :
                            array_push($others, "<a class=\"file\" href=\"$other_filename\">[" . $ex . "]</a>");
                            array_push($displayed, $other_filename);
				}
			}
		}
		if ($others) { print "<p>Also as ".implode(', ',$others)."</p>"; }
		else { 
        }
		print "</div>";
	}
}
?>
</div>
<div style="display: block; clear:both;">
<br>
<hr>
<?php
print "<div class=\"dirlinks\">\n";
print "<h2>Other files\n";
print "</div>";
?>
<ul>
<?php
foreach ($allfiles as $filename) {
    if ($_GET['noplots'] || !in_array($filename, $displayed)) {
	    if( ! $matchf($match,$filename) ) { continue; }
	    if( fnmatch("*_thumb.*", $filename) ) {
		    continue;
	    }
	if ( substr($filename,-1) == "~" ) continue;
        if (is_dir($filename)) {
        } else {
            if ( !in_array($filename, ['README.md'], true ) ) {
                if( fnmatch("*.root", $filename) ) {
                    print "<li><a href=\"$jsroot_instance?file=$folder$filename\">$filename</a></li>";
                }
                elseif( fnmatch("*.ipynb", $filename) ) {
                    #print "<li><a href=\"$filename\">$filename</a></li>";
                }
                else {
                    print "<li><a href=\"$filename\">$filename</a></li>";
                }
            }
        }
    }
}
?>
</ul>
</div>
<p>
<!--
Like this page? <a href="https://github.com/lk11235/php-plots">Get it here.</a><br />
Credits: Giovanni Petrucciani.
-->
</p>
</body>
</html>
