<html>

<?php

function prompt($prompt_msg){
        echo("<script type='text/javascript'> var answer = prompt('".$prompt_msg."'); </script>");

        $answer = "<script type='text/javascript'> document.write(answer); </script>";
        return($answer);
    }

function password() {
        $p = prompt('password:');
        echo($p);
    }

$jsroot_instance = "/jsroot";
$pruned_uri = $_SERVER['REQUEST_URI'];
if( $_SERVER['QUERY_STRING'] ) {
    $pos = strpos($_SERVER['REQUEST_URI'], $_SERVER['QUERY_STRING']);
    $pruned_uri = substr($_SERVER['REQUEST_URI'],0,$pos-1);
}
$folder = str_replace($_SERVER['DOCUMENT_ROOT'], "", str_replace("index.php","",$pruned_uri));
$script_path = substr_replace(dirname($_SERVER["SCRIPT_FILENAME"]), $_SERVER['CONTEXT_PREFIX'], 0, strlen($_SERVER['CONTEXT_DOCUMENT_ROOT']));
$target_folder = substr_replace($pruned_uri, $_SERVER['CONTEXT_DOCUMENT_ROOT'], 0, strlen($_SERVER['CONTEXT_PREFIX']));
$script_path = str_replace("//","/","/".$script_path);
chdir( $target_folder )
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
                                          // Don't allow decrementing below zero
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
<style>
.img-container {
    text-align: center;
    vertical-align: middle;
    position: relative; 
    margin: auto;
    display: block;
}
</style>
</head>

<body>
<br>
<?php
$wkdir = str_replace("/login.ph", "", substr($folder,1,-1));

print "<div class=\"dirlinks\">\n";
print "<h1 align='center'>".$wkdir." @ ".$_SERVER['SERVER_NAME']."</h1>\n";
if ($pruned_uri != '/lkang/') {
    print "<h3 align='center'><a href=\"../\">[ <span>&#8679;</span> parent directory <span>&#8679;</span> ]</a></h3>\n";
}
print "</div>\n";
?>
<br>
<hr>
<br>
<br>
<form method="post" align="center" action="<?php echo $_SERVER['PHP_SELF'];?>">
  Password: <input type="password" name="fname">
  <input type="submit">
</form>
<br>
<?php
print '<span class="img-container"> <!-- Inline parent element -->';
print '<img src=".resources/.never_told_anyone.png" alt="">';
print '</span>';
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $pwd = trim($_POST['fname']);
    $salted = crypt(($pwd), strrev($wkdir));
    $master = crypt(($pwd), strrev($pwd));
    $rainbow = file('.resources/.rainbow', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);    
    $user = array($salted, $master);
    if ( count(array_intersect($user, $rainbow))>0 ) {
        if ( file_exists('index.php') ) {
            header("Location: index.php");
        }
    }
    #print "<p align='center'>".$salted."<br><br>".$master."</p>";
}
?>

</body>
</html>
