examples_more = {
   TH1: [
     { name: "docu_zero", file: "histpainter6.root", layout: "vert21", style: "style_zero", items: ['draw_bar','draw_zero2','draw_zero1'], title: "show gStyle->SetHistMinimumZero(); functionality from THistPainter documentation page" },
     { name: "varbins", file: "hbins.root", item: "SpectraPions;1", title: "variable bins" },
     { name: "labels", opt: "hist", file: "hitmap.root", item: "EnergyMeanAsyLo;1", title: "custom text labels for hist bins" },
     { name: "negfill", opt: "hist,fill_red", file: "hitmap.root", item: "EnergyMeanAsyLo;1", title: "fill attributes for histogram with negative bins" },
     { name: "labels2", opt: "", file: "text_labels.root", item: "c1;1", title: "small labels, should be rotated by 20 grad" },
     { name: "hbar", file: "hbars.root", item: "c1;1", title: "Horizontal bars" },
     { name: "tut1", file: "tutorials_hist.root", layout: "grid2x1", items: ['h1draw','hksimple'], title: "Macro outputs from $ROOTSYS/tutorials/hist" },
     { name: "tut2", file: "tutorials_hist.root", layout: "grid2x1", items: ['logscales', 'rebin'], title: "Macro outputs from $ROOTSYS/tutorials/hist" },
     { name: "tut3", file: "tutorials_hist.root", layout: "grid2x2", items: ['histpalettecolor', 'hlabels1', 'twoscales', 'transpad'], title: "Macro outputs from $ROOTSYS/tutorials/hist" },
     { name: "tut4", file: "tutorials_hist.root", layout: "grid2x2", items: ['thstackpalettecolor', 'statsEditing', 'testSmooth',  'xyplot'], opts: ['pfc nostack'], title: "Macro outputs from $ROOTSYS/tutorials/hist" }
   ],
   TH2: [
     { name: "hitmap", file: "hitmap.root", item: "HitMap;1" },
     { name: "atlas", opt: "col", file: "atlas.root", item: "LEDShapeHeightCorr_Gain0;1" },
     { name: "logx", opt: "colz", file: "QAresults.root", item: "PIDqa/PIDqa1/ITS/hNsigmaP_ITS_electron;1" },
     { name: "logz", url: "?nobrowser&file=$$$sparsehist.root&item=c;1&palette=7", title: "LogZ plus text on several canvas" },
     { name: "userz", json: "th2ul.json.gz", opt: "colz", title: "TH2 with set user min/max, drawn with COLZ" },
     { name: "candle", file: "candleplot.root", item: "c1;1" },
     { name: "box_same", json: "hbox_same.json.gz", title: "several histograms, drawn with box same opitons" },
     { name: "col_same", json: "hcol_same.json.gz", title: "several histograms, drawn with col same opitons" },
     { name: "docu", file: "histpainter6.root", layout: "vert33", items: ['draw_th2e','draw_scat','draw_arr','draw_box','draw_box1','draw_boxsame'], title:"several TH2 examples from THistPainter documentation page" },
     { name: "docu_col", file: "histpainter6.root", layout: "grid2x2", items: ['draw_col','draw_col1', 'draw_colr', 'draw_text2d'], title:"several TH2 COL examples from THistPainter documentation page" },
     { name: "docu_cont", file: "histpainter6.root", layout: "vert33", items: ['draw_contz','draw_cont1z', 'draw_cont2', 'draw_cont3', 'draw_cont4z', 'draw_contlst1'], title:"several TH2 CONT examples from THistPainter documentation page" },
     { name: "docu_lego", file: "histpainter6.root", layout: "grid2x2", items: ['draw_lego', 'draw_lego1', 'draw_lego3', 'draw_lego2'], title: "several TH2 LEGO examples from THistPainter documentation page" },
     { name: "docu_surf", file: "histpainter6.root", layout: "grid4x2", items: ['draw_surf', 'draw_surf1', 'draw_surf2', 'draw_surf3', 'draw_surf4', 'draw_surf5', 'draw_surf7', 'draw_surf2_cont1'], title: "several TH2 SURF examples from THistPainter documentation page" },
     { name: "lego_tf2", file: "https://root.cern/files/StressIOPluginsTestFiles/stress_5.root", item:"h2form", opt:"lego", title: "Combination of th2 an tf2 in 3D" },
     { name: "tut1", file: "tutorials_hist.root", layout: "grid2x2", items: ['thstack2palettecolor', 'reverseaxis', 'hlabels2', 'labels3'], opts: ['0lego1_pfc'], title: "Macro outputs from $ROOTSYS/tutorials/hist" },
     { name: "earth", file: "tutorials_graphics.root", item: 'earth',  title: "Earth projections, tutorials/graphics/earth.C" },
     { name: "hard_cont", file: "hard_contour.root", item: 'hard_contour',  title: "Complex contour plot without closed lines, trying to fix it", opt:"cont" },
     { name: "symlog", opt: "col,symlogx,symlogy", file: "hsimple.root", item: "hpxpy;1", title: "symlog scale with default 1e-3 factor for constant" },
     { name: "symlog1", opt: "col,symlogx1,symlogy1", file: "hsimple.root", item: "hpxpy;1", title: "symlog scale with 1e-1 factor for constant" },
     { name: "symlog5", opt: "col,symlogx5,symlogy5", file: "hsimple.root", item: "hpxpy;1", title: "symlog scale with 1e-5 factor for constant" },
     { name: "greek", opt: "lego2;xtitle:x=%23alpha%23pm%23sigma;ytitle:y=%23beta%23pm%23sigma;ztitle:z=%23gamma%23pm%23sigma", file: "hsimple.root", item: "hpxpy;1", title: "Greek letters on lego plot" }
   ],
   TH2Poly : [
      { name: "germany", url: "?nobrowser&file=$$$th2poly.root&item=europe;1/[13]", title: "Draw single TH2PolyBin from europe map" },
      { name: "docu", file: "histpainter6.root", layout: "vert22", items: ['draw_poly1', 'draw_poly2', 'draw_poly3'], title: "several TH2Poly examples from THistPainter documentation page" }
   ],
   TH3 : [
      { name: "subpads", opt: "", file: "glc.root", item: "glc;1", title: "canvas with two subpads, both with 3D plotls" }
   ],
   TWebCanvas: [
      { name: "greyscale", json: "web6canv/greyscale.json.gz", title: "40K TBox objects with different fill attributes" },
      { name: "para", json: "web6canv/StandAloneaPara.json.gz", title: "TTree drawing into TParallelCoord object" },
      { name: "pie", json: "web6canv/piechart.json.gz", title: "Testing native TPie painting" },
      { name: "trans", json: "web6canv/transparency.json.gz", title: "Testing with TGraph without axes" }
   ],
   v7 : [
      { name: "axes", json: "v7/axes.json.gz", title: "RAxes drawings" },
      { name: "rh1", json: "v7/rh1.json.gz", title: "draw_rh1.cxx macro output" },
      { name: "rh1_twoaxes", json: "v7/rh1_twoaxes.json.gz", title: "draw_rh1_twoaxes.cxx macro output" },
      { name: "rh2", json: "v7/rh2.json.gz", title: "draw_rh2.cxx macro output" },
      { name: "rh2_colz", json: "v7/rh2_colz.json.gz", title: "draw_rh2_colz.cxx macro output" },
      { name: "rh3", json: "v7/rh3.json.gz", title: "draw_rh3.cxx macro output" },
      { name: "frame", json: "v7/frame.json.gz", title: "draw_frame.cxx macro output" },
      { name: "legend", json: "v7/legend.json.gz", title: "draw_legend.cxx macro output" },
      { name: "pave", json: "v7/pave.json.gz", title: "draw_pave.cxx macro output" },
      { name: "subpads", json: "v7/subpads.json.gz", title: "draw_subpads.cxx macro output" },
      { name: "text", json: "v7/text.json.gz", title: "draw_text.cxx macro output" },
      { name: "v6", json: "v7/v6.json.gz", title: "draw_v6.cxx macro output" },
      { name: "line", json: "v7/line.json.gz", title: "line.cxx macro output" },
      { name: "box", json: "v7/box.json.gz", title: "box.cxx macro output" },
      { name: "lineRStyle", json: "v7/lineRStyle.json.gz", title: "lineRStyle.cxx macro output" },
      { name: "lineStyle", json: "v7/lineStyle.json.gz", title: "lineStyle.cxx macro output" },
      { name: "lineWidth", json: "v7/lineWidth.json.gz", title: "lineWidth.cxx macro output" },
      { name: "markerStyle", json: "v7/markerStyle.json.gz", title: "markerStyle.cxx macro output" },
      { name: "pad", json: "v7/pad.json.gz", title: "pad.cxx macro output" },
      { name: "symlog", json: "v7/symlog.json.gz", title: "draw_symlog.cxx macro output" }
   ],
   THStack : [
      { opt: "orig", file: "stacks.root", item: "stacks;1", title: "original example used for JSROOT testing since a while" },
      { name: "json", json: "thstack.json.gz", title: "some special stack from JSON file" }
   ],
   TTree : [
      { name: "wjets", asurl: true, file: "WJets.root", item: "t;1/met", title: "Histogram data of branch with vectors" },
      { name: "index", asurl: true, file: "tree99.root", item: "T;1", opt: "ex3.fInt[ex3.fSize-2]", title: "Use branch value as index in another branch draw" },
      { name: "cms2", asurl: true, file: "https://root.cern/files/cms2.root", item: "Events", opt:"recoPhotons_photons__RECO.obj[].pt_", title: "cms2.root file, example of draw subelement of the branch" },
      { name: "brobj", asurl: true, file: "https://root.cern/files/mods.root", item: "MODS/Particles", opt: "dump",  title: "TObjectBranch, appears in older ROOT files" },
      { name: "bits", asurl: true, large: true, file: "https://root.cern/files/Event100000.root", item: "T", opt: "event.fTracks.fBits>>bits(32);num:5000", title: "Special 1-D histogram kind with bits values" },
      { name: "tbits", asurl: true, file: "https://root.cern/files/event/event_0.root", item: "EventTree;2", opt: "event.fTriggerBits", title: "Special handling for TBits object" },
      { name: "tbits2", asurl: true, file: "https://root.cern/files/Event100000.root", item: "T", opt: "event.fTriggerBits", title: "TBits object splitted on the subbranches" },
      { name: "tbits3", asurl: true, large: true, file: "https://root.cern/files/Event100000.root", item: "T", opt: "event.fTracks[].fTriggerBits;num:200", title: "TBits from tracks array, read complete track object (slower)" },
      { name: "tbits4", asurl: true, large: true, file: "https://root.cern/files/Event100000.root", item: "T", opt: "event.fTracks.fTriggerBits;num:200", title: "TBits from tracks array, read only TBits sub-branches (faster)" },
      { name: "vect_pair", asurl: true, file: "test_cmssw_10000.root", item:"Events", opt:"recoBeamHaloSummary_BeamHaloSummary__RECO.obj.problematicStrips.cellTowerIds.;dump;first:7900;num:100", title: "CMS-SW events, vector of pair<> objects, store pair version even for empty vector" },
      { name: "SLT_kStream", asurl: true, file: "https://root.cern/files/atlas30new.root", item: "CollectionTree/Rec::TrackParticleContainer_tlp1_MooreTrackParticles/m_hepSymMatrices/m_matrix_val", opt: "dump", title: "Branch with vector<float> (kStreamer) inside of STL container" },
      { name: "branch_base", asurl: true, file: "https://root.cern/files/cms2.root", item: "Events", opt: "GenEventInfoProduct_generator__HLT.>>dump;num:100", title: "Object with empty base class" },
      { name: "branch_mvect", asurl: true, file: "https://root.cern/files/cms2.root", item: "Events", opt:"L1GlobalTriggerObjectMapRecord_hltL1GtObjectMap__HLT.obj.>>dump", title: "Branch with object which has vector of vector of vector of int, requires special handling" },
      { name: "files", asurl: true, file: "https://root.cern/files/alice_ESDs.root", item: "esdTree;1/ESDfriend./fTracks/fTPCindex", opt: "dump", title: "Data branch stored in different file (in same dir), counter data in main file" },
      { name: "float16", asurl: true, file: "https://root.cern/files/Event100000.root", item: "T/event/fTracks/fMass2", opt: "dump", title: "Float16_t type as TClonesArray branch" },
      { name: "markus", url: "?file=https://root.cern/files/markus.root&item=_Event/Refs&opt=dump&load=$$$gaudi.js", title: "custom streamer for pool::Token class from some branches" },
      { name: "cmssw1", asurl: "browser", file: "test_cmssw_10000.root", item: "MetaData", opt: "testio", title: "CMS-SW metadata, complex std::map classes" },
      { name: "reco103", asurl: "browser", file: "https://root.cern/files/reco_103.root", item: "Events", opt:"testio", title: "Older ROOT file with many branches, std::map classes", notest:true },
      { name: "cmssw_io", asurl: "browser", file: "test_cmssw_10000.root", item: "Events", opt:"testio", title: "Test I/O with CMS-SW events data", notest:true },
      { name: "lhcb2_io", asurl: true, file: "https://root.cern/files/lhcb2.root", item: "E", opt:"testio", title: "Test I/O with lhcb2.root file", notest:true },
      { name: "atlas_io", asurl: true, file: "https://root.cern/files/atlas30new.root", item: "CollectionTree", opt:"testio", title: "Test I/O with atlas30new.root file", notest:true },
      { name: "alice_esd", asurl: true, file: "https://root.cern/files/alice_ESDs.root", item: "esdTree", opt:"testio", title: "Test I/O with alice_ESDs.root file, include friedns files", notest:true }
   ],
   TF1 : [
      { name: "ip0", file: "ip0.root", item: "c;1" },
      { name: "root5", file: "danilo5.root", item: "canvas;1" },
      { name: "gaus", file: "macro8.root", item: "c1;1" },
      { name: "landau", file: "cdist.root", item: "cdist;1", title: "TF1 as TFormula with C function inside" },
      { name: "cosmic", file: "cosmic.root", item: "cosmic;1", title: "TF1 inside histogram, use bins coordinates" }
   ],
   TF2 : [
     { name: "xygaus", file: "https://root.cern/files/StressIOPluginsTestFiles/stress_5.root", item: "f2form", title: "TF2 with xygaus" }
   ],
   TCanvas : [
     { name: "jpsi", file:"JPsi_evolution.root", item: "CutTrees/cut1/C_cut1 < 2.85714;1" },
     { name: "noframe", file: "can4.root", item: "c1;1" },
     { name: "higgs", file: "higgs_c.root", item: "c;1" },
     { name: "amore", file: "VertexXY.root", item: "Amore Canvas;1" },
     { name: "dual", file: "myDualCanvas.root", item: "DualCanvas;1", title: "Canvas with two subpads and double-log scale" },
     { name: "rotate", file: "legends.root", item: "legends;1", opt: "rotate", title: "Rotation of drawings in the TFrame, for special purposes" },
     { name: "hsum", file: "hsum.root", item: "c1;1", title: "Canvas with several histos and selected user range (from hsum.C macro)" },
     { name: "sub-sub", file: "fitslicesy.root", item: "c1;1", title: "Canvas with sub-sub pads" },
     { name: "wtmass", file: "WtMass.root", item: "WtMass;1", title: "Histogram with absolute axis font size" },
     { name: "multi", file: "general.root", item: "canvas_0;1", title: "many superimposed histograms and graphs" },
     { name: "greyscale", json: "greyscale.json.gz", title: "produced from tutorials/hist/greyscale.C macro" },
     { name: "atlas", file: "AtlasExample.root", item: "c1", style: "style", title: "ATLAS style example, https://root-forum.cern.ch/t/27751" },
     { name: "swan", file: "swan.root", item: "c", title: "Mix of TH2 and TH1 on same pad with TGaxis and disabled y zoom" }
   ],
   TGeo : [
     { name: "atlas_cryo", asurl: true, file: "https://root.cern/files/atlas.root", item: "atlas;1", opt: "macro:https://root.cern/files/atlas_cryo.C" },
     { name: "atlas_simple", asurl: true, json: "geom/simple_atlas.json.gz", opt: "ac" },
     { name: "star", asurl: true, json: "geom/star_svtt.json.gz" },
     { name: "hades", asurl: true, json: "geom/hades.json.gz", opt: "vislvl10", title: "HADES geometry" },
     { name: "transform", asurl: true, json: "geom/hades.json.gz", opt: "vislvl10;trr100;trz200;ctrl", title: "Transformed HADES geometry" },
     { name: "babar", asurl: true, json: "geom/babar_emca.json.gz", opt: "vislvl10" },
     { name: "alice_simple", asurl: true, json: "geom/simple_alice.json.gz", title: "simple alice geomtery" },
     { name: "Dipole", url: "?nobrowser&file=https://root.cern/files/alice2.root&item=Geometry;1/ALIC/Dipole_1", title: "Part of volumes from geo manager" },
     { name: "count", asurl: true, file: "https://root.cern/files/alice2.root", item: "Geometry;1", opt: "count", title: "Count volume in large geomtery" },
     { name: "tank", asurl: true, file: "https://root.cern/files/tank.root", item: "geom;1", opt: "z;rotate", title: "Just for fun" },
     { name: "lego", asurl: true, file: "https://root.cern/files/lego.root", item: "geom;1", opt: "z;rotate", title: "Just for fun" },
     { name: "cheon", asurl: true, file: "https://root.cern/files/cheongwadae.root", item: "geom;1", opt: "", title: "One more building" },
     { name: "proj2", url: "?nobrowser&layout=h21_12&files=[https://root.cern/files/alice_ESDgeometry.root,$$$geom/eve_tracks.root]&items=[[0]/Gentle,[0]/Gentle,[[0]/Gentle,[1]/tracks]]&opts=[projz,projx,main;black]", title: "Place main drawing not on the first place" },
     { name: "canv", file: "geom/south_gate.root", item: "c1;1", opt: "", title: "geometry storead in the TCanvas" },
   ],
   TGraph : [
     { name: "twopad", file:"graph_twopad.root", item: "c1;1", title: "two overlays pads with different axes" },
     { name: "macro2", file:"macro2.root", item: "c1;1" },
     { name: "split", file: "gr2.root", item: "c1equi;1", title: "split line in legend, ignored" },
     { name: "approx", file: "tutorials_graphs.root", item: "approx;1", title: "Output of tutorials/graphs/approx.C" }
   ],
   TLatex : [
      { name: "symbols", file: "latex.root", layout: "grid2x2", latex: "symbols", items: ['lva','ex1','ex2','ex3'], title: "Replace only known TLatex Disable TLatex symbols" },
      { name: "plain", file: "latex.root", layout: "grid2x2", latex: "off", items: ['lva','ex1','ex2','ex3'], title: "Disable TLatex processor completely" }
   ],
   TASImage : [
      { name: "n4254_json", json: "image.json.gz", title: "TASImage with binary data, see tutorials/image/galaxy_image.C macro" },
      { name: "rose_json", json: "rose.json.gz", title: "TASImage with PNG and binary data, see tutorials/image/rose_image.C macro" }
   ],
   Misc : [
     { name: "spline_axes", url: "?nobrowser&file=$$$tutorials_graphs.root&item=[splines_test/[1],splines_test/[9]]&opt=[,x+y+]", title: "Draw TF1 and TSpline, last uses second axes" },
     { name: "io", url: "?file=$$$iotest.root&layout=grid4x3&items=[ex1,ex2,ex3,ex4,ex5,ex6,ex7,ex8,ex9,ex10,clones,map]&opts=[inspect,inspect,inspect,inspect,inspect,inspect,inspect,inspect,inspect,inspect,inspect,inspect]", title: "Different I/O test classes" },
     { name: "io56", file: "fitLinear56.root", item: "fitLinear6", title: "file with two version from ROOT 5/6 of same object" },
     { name: "userio", url: "?file=$$$amore.root&item=moH1F_0;1&load=$$$amore.js", title : "Example of custom streamer and custom draw function (AMORE)" },
     { name: "folder", url: "?file=$$$folders.root&expand=RsnMgr;1/input/0/2/10&item=RsnMgr;1/input/0/2/4/hSignal", title: "TFolder class" },
     { name: "task", url: "?file=$$$tasks.root&expand=run;1/event/tracker&item=run;1/event/[0]/[4]&opt=inspect", title: "TTask class" },
     { name: "alitask", url: "?file=$$$alitasks.root&expand=RsnMgr;1/input/1/3/9&item=RsnMgr;1/input/1/3/8/fOutput/hSignalBadFit", title: "AliRoot TTask classes" },
     { name: "aliQA", asurl: "browser", file: "QAresults_barrel.root", item: "TPC_PerformanceQA/TPCQA;1/AliPerformanceTPC/fTPCClustHisto", opt: "inspect", title: "Objects from Alice QA file" },
     { name: "roofit", file: "https://root.cern/files/stressRooFit_v534_ref.root", layout: "grid2x2", items: ['rf101_plot2','rf201_plot1','rf310_plot2','rf708_plot6'], title: "Several RooFit plots (still some classes not work)" },
     { name: "ioperf", asurl: true, file: "https://root.cern/files/aod_orig.root", item: "ioperf;1/fGraphIO", opt: "", title: "Reading TTreePerfStats object and draw graph, fails in normal ROOT I/O" },
     { name: "taxis", file: "tutorials_graphs.root", item: "timeonaxis3", title: "Custom time format for TGaxis, output of tutorials/graphs/timeonaxis3.C" },
     { name: "gtime", file: "tutorials_graphs.root", item: "gtime", opt: "repeat", title: "Example of TGraphTime, output of tutorials/graphs/gtime.C", testopt: "first" },
     { name: "diamond", file: "tutorials_graphics.root", item: 'diamond',  title: "TDiamond, tutorials/graphics/diamond.C" },
     { name: "crown", file: "tutorials_graphics.root", item: 'crown',  title: "TCrown, tutorials/graphics/crown.C" },
     { name: "zstd", file: "zstd.root", item: 'ccdb_object', zstd: true, title: "File with ZSTD compression, required zstd-codec.js script" }
   ]
};
