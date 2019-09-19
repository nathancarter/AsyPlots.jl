var documenterSearchIndex = {"docs":
[{"location":"man/settings/#Settings-1","page":"Settings","title":"Settings","text":"","category":"section"},{"location":"man/settings/#","page":"Settings","title":"Settings","text":"asy\ncairo\njunosvg\njunopng\nfitwidth\nfitheight","category":"page"},{"location":"man/settings/#AsyPlots.asy","page":"Settings","title":"AsyPlots.asy","text":"asy()\n\nSet the backend to Asymptote\n\n\n\n\n\n","category":"function"},{"location":"man/settings/#AsyPlots.cairo","page":"Settings","title":"AsyPlots.cairo","text":"cairo()\n\nSet the backend to Cairo\n\n\n\n\n\n","category":"function"},{"location":"man/settings/#AsyPlots.junosvg","page":"Settings","title":"AsyPlots.junosvg","text":"junosvg()\n\nSet the default output format for the Juno plot pane to svg\n\n\n\n\n\n","category":"function"},{"location":"man/settings/#AsyPlots.junopng","page":"Settings","title":"AsyPlots.junopng","text":"junopng()\n\nSet the default output format for the Juno plot pane to png\n\n\n\n\n\n","category":"function"},{"location":"man/settings/#AsyPlots.fitwidth","page":"Settings","title":"AsyPlots.fitwidth","text":"fitwidth()\n\nSet the figures appearing in the Juno plot pane to match its width\n\n\n\n\n\n","category":"function"},{"location":"man/settings/#AsyPlots.fitheight","page":"Settings","title":"AsyPlots.fitheight","text":"fitheight()\n\nSet the figures appearing in the Juno plot pane to match its height\n\n\n\n\n\n","category":"function"},{"location":"man/asy3d/#D-Plots-1","page":"3D Plots","title":"3D Plots","text":"","category":"section"},{"location":"man/asy3d/#","page":"3D Plots","title":"3D Plots","text":"Each graphics primitive ending in 3D has an alternative constructor with the 3D part dropped.","category":"page"},{"location":"man/asy3d/#","page":"3D Plots","title":"3D Plots","text":"Point3D\nPath3D\nPolygon3D\nSurface","category":"page"},{"location":"man/asy3d/#AsyPlots.Point3D","page":"3D Plots","title":"AsyPlots.Point3D","text":"Point3D(x::Real,y::Real,z::Real; label=\"\",pen=Pen())\nPoint3D(P; label=\"\",pen=Pen())\n\nA graphics primitive representing a three-dimensional point.\n\nP may be a 3-tuple of real numbers or a Vec3\n\nExamples\n\njulia> Point3D(0,4,5;pen=\"DarkGreen\")\n\n\n\n\n\n","category":"type"},{"location":"man/asy3d/#AsyPlots.Path3D","page":"3D Plots","title":"AsyPlots.Path3D","text":"Path3D(points;label=\"\",pen=Pen(),arrow=\"\",spline=false)\n\nA graphics primitive representing a two-dimensional path\n\npoints may be an Array of Vec3s or an Array of 3-tuples. Alternatively, iterables of coordinates may be supplied separately as x and y\n\nExamples\n\njulia> Path3D([(0,0),(1,0),(1,1)];pen=\"MidnightBlue\")\n\n\n\n\n\n","category":"type"},{"location":"man/asy3d/#AsyPlots.Polygon3D","page":"3D Plots","title":"AsyPlots.Polygon3D","text":"Polygon3D(points;pen=Pen(),\n                 fillpen=Pen(color=\"white\"),\n                 spline=false)\n\nA graphics primitive representing a three-dimensional polygon\n\npoints may be an Array of Vec3s or an Array of 3-tuples.\n\nExamples\n\njulia> Polygon3D([(0,0,0),(1,0,0),(1,1,0)];pen=\"MidnightBlue\")\n\n\n\n\n\n","category":"type"},{"location":"man/asy3d/#AsyPlots.Surface","page":"3D Plots","title":"AsyPlots.Surface","text":"Surface(x::Array{<:Real},\n        y::Array{<:Real},\n        z::Array{<:Real,2};\n        options)\nSurface(z::Array{<:Real},2)\n\nA graphics primitive representing a surface in three dimensions x and y may be one- or two-dimensional arrays\n\nThe surface passes through the points     [x[i,j],y[i,j],z[i,j] for i=1:size(z,1),j=1:size(z,2)]\n\nThe options are\n\ncolors: A vector of color names, for coloring\nspline: whether to draw a smooth or piecewise smooth surface\nsurfacepen: a pen for drawing the surface\nmeshpen: a pen for drawing the grid lines on the surface\nclip: either false or a boolean array of the same dimensions         as x, y, and z, specifying patches to exclude\n\n\n\n\n\n","category":"type"},{"location":"man/asy2d/#D-Plots-1","page":"2D Plots","title":"2D Plots","text":"","category":"section"},{"location":"man/asy2d/#","page":"2D Plots","title":"2D Plots","text":"Each of the following 2D graphics primitives has an alternative constructor without the 2D at the end.","category":"page"},{"location":"man/asy2d/#","page":"2D Plots","title":"2D Plots","text":"Point2D\nPath2D\nCircle2D\nPolygon2D\nRawString","category":"page"},{"location":"man/asy2d/#AsyPlots.Point2D","page":"2D Plots","title":"AsyPlots.Point2D","text":"Point2D(x::Real,y::Real; label=\"\",pen=Pen())\nPoint2D(P; label=\"\",pen=Pen())\n\nA graphics primitive representing a two-dimensional point.\n\nP may be a 2-tuple of real numbers, a Vec2, or a Complex\n\nExamples\n\njulia> Point2D(3,-1;pen=\"DarkGreen\")\nPoint2D(3,-1;pen=DarkGreen)\n\n\n\n\n\n","category":"type"},{"location":"man/asy2d/#AsyPlots.Path2D","page":"2D Plots","title":"AsyPlots.Path2D","text":"Path2D(points;label=\"\",pen=Pen(),arrow=NoArrow(),spline=false)\nPath2D(x,y;label=\"\",pen=Pen(),arrow=NoArrow(),spline=false)\n\nA graphics primitive representing a two-dimensional path\n\npoints may be an Array of Vec2s, an Array of 2-tuples, or an n  2 Array. Alternatively, iterables of coordinates may be supplied separately as x and y\n\nExamples\n\njulia> Path2D([(0,0),(1,0),(1,1)];pen=\"MidnightBlue\")\nPath2D(<3 points>;pen=MidnightBlue)\n\n\n\n\n\n","category":"type"},{"location":"man/asy2d/#AsyPlots.Circle2D","page":"2D Plots","title":"AsyPlots.Circle2D","text":"Circle2D(center,radius; pen::Pen,fillpen::Pen)\n\nA graphics primitive representing a circle in the plane\n\ncenter may be a Vec2 or a 2-tuple of Reals or a Complex\n\nExamples\n\njulia> Circle2D((0,0),1;pen=\"LightBlue\",fillpen=\"red\")\nCircle2D((0,0),1;pen=LightBlue,fillpen=red)\n\n\n\n\n\n","category":"type"},{"location":"man/asy2d/#AsyPlots.Polygon2D","page":"2D Plots","title":"AsyPlots.Polygon2D","text":"Polygon2D(points;pen=Pen(),\n                 fillpen=Pen(color=\"white\"),\n                 spline=false)\n\nA graphics primitive representing a two-dimensional polygon\n\npoints may be an Array of Vec2s, an Array of 2-tuples, or an n  2 Array. Alternatively, iterables of coordinates may be supplied separately as x and y\n\nExamples\n\njulia> Polygon2D([(0,0),(1,0),(1,1)];pen=\"MidnightBlue\")\nPolygon2D(<3 points>;pen=MidnightBlue)\n\n\n\n\n\n","category":"type"},{"location":"man/asy2d/#AsyPlots.RawString","page":"2D Plots","title":"AsyPlots.RawString","text":"RawString(s::AbstractString)\n\nContainer for directly inserting Asymptote drawing commands\n\nExamples\n\njulia> Plot([Circle((0,0),1),RawString2D(\"draw((0,0)--dir(20));\")])\n\n\n\n\n\n","category":"type"},{"location":"man/graphing/#Graphing-Functions-1","page":"Graphing Functions","title":"Graphing Functions","text":"","category":"section"},{"location":"man/graphing/#","page":"Graphing Functions","title":"Graphing Functions","text":"plot","category":"page"},{"location":"man/graphing/#AsyPlots.plot","page":"Graphing Functions","title":"AsyPlots.plot","text":"plot(x,y;kwargs...)\nplot(y;kwargs...)\n\nReturn a graph of the path with x and y values given by x and y\n\nx defaults to 0:length(y)-1. kwargs are applied to the Path2D object representing the line or to the containing Plot2D, as appropriate\n\nplot(xs::Vector{<:Vector{<:Real}},\n     ys::Vector{<:Vector{<:Real}};\n     kwargs...)\n\nMultiple line graphs in the same figure\n\nplot(x,y,z;kwargs...)\nplot(z::Array{<:Real,2};kwargs...)\n\nA graph of the surface with x, y, and z values x, y, and z\n\nx defaults to [i-1 for i=1:size(z,1),j=1:size(z,2)] and y defaults to [j-1 for i=1:size(z,1),j=1:size(z,2)]\n\nExamples\n\nplot(cumsum(randn(100)))\nplot(rand(5,5))\n\n\n\n\n\n","category":"function"},{"location":"man/graphing/#","page":"Graphing Functions","title":"Graphing Functions","text":"using AsyPlots # hide\nplot(x->sin(2π*x),(0,1),linewidth=2,axisarrow=Arrow())\nsave(\"sineplot.svg\",ans) # hide\nnothing # hide","category":"page"},{"location":"man/graphing/#","page":"Graphing Functions","title":"Graphing Functions","text":"(Image: )","category":"page"},{"location":"man/graphing/#","page":"Graphing Functions","title":"Graphing Functions","text":"using AsyPlots # hide\nplot((x,y)->exp(-x^2-y^2),(-2,2),(-2,2),xmax=2.5,ymax=2.5,zmax=1.1)\nsave(\"gaussianplot.svg\",ans) # hide\nnothing # hide","category":"page"},{"location":"man/graphing/#","page":"Graphing Functions","title":"Graphing Functions","text":"(Image: )","category":"page"},{"location":"man/graphing/#","page":"Graphing Functions","title":"Graphing Functions","text":"using AsyPlots # hide\nusing SymPy\n@vars x y\nplot(x*y*sin(x*y/4),(x,0,2π),(y,0,2π))\nsave(\"wave.svg\",plot(x*y*sin(x*y/4),(x,0,2π),(y,0,2π),width=250)) # hide\nnothing # hide","category":"page"},{"location":"man/graphing/#","page":"Graphing Functions","title":"Graphing Functions","text":"(Image: )","category":"page"},{"location":"examples/examples2d/#D-Examples-1","page":"2D Examples","title":"2D Examples","text":"","category":"section"},{"location":"examples/examples2d/#","page":"2D Examples","title":"2D Examples","text":"Eigenvalues of a 1000 × 1000 random matrix","category":"page"},{"location":"examples/examples2d/#","page":"2D Examples","title":"2D Examples","text":"using AsyPlots # hide\nusing LinearAlgebra\nPlot(map(Point,eigvals(randn(1000,1000))))\nsave(\"eigs.svg\",ans) # hide\nnothing # hide","category":"page"},{"location":"examples/examples2d/#","page":"2D Examples","title":"2D Examples","text":"(Image: )","category":"page"},{"location":"examples/examples2d/#","page":"2D Examples","title":"2D Examples","text":"using AsyPlots # hide\nrandcolor() = rand(Bool) ? \"Blue\" : \"Yellow\"\nL = Polygon2D[]\nfor i=1:100\n  for j=1:100\n    push!(L,box(i,j,i+1,j+1;\n                fillpen=Pen(color=randcolor()),\n                pen=NoPen()))\n  end\nend\ncairo() \nP = Plot(L;border=0)\nasy() # hide\nsave(\"perc.svg\",P) # hide\nnothing # hide","category":"page"},{"location":"examples/examples2d/#","page":"2D Examples","title":"2D Examples","text":"(Image: )","category":"page"},{"location":"man/animate/#Animation-1","page":"Animation","title":"Animation","text":"","category":"section"},{"location":"man/animate/#","page":"Animation","title":"Animation","text":"animate","category":"page"},{"location":"man/animate/#AsyPlots.animate","page":"Animation","title":"AsyPlots.animate","text":"animate(filename::AbstractString,\n        plots::Vector{Plot2D};\n        rate=10)\n\nanimate(plots::Vector{Plot2D};rate=10)\n\nMake an .mp4 video from plots, with frame rate rate\n\nIf \"filename\" is given, the movie file will be stored there. Otherwise, the movie will be opened.\n\nExample\n\nX = cumsum(randn(100000))\nY = cumsum(randn(100000))\nplots = [Plot(Path(X[1:t],Y[1:t])) for t=10:10:10000]\nanimate(plots)\n\n\n\n\n\n","category":"function"},{"location":"man/defaults/#Default-Options-1","page":"Default Options","title":"Default Options","text":"","category":"section"},{"location":"man/defaults/#","page":"Default Options","title":"Default Options","text":"This page collects the default options for all this package's basic types.","category":"page"},{"location":"man/defaults/#","page":"Default Options","title":"Default Options","text":"using AsyPlots # hide\nAsyPlots._DEFAULT_PEN_ARGS","category":"page"},{"location":"man/defaults/#","page":"Default Options","title":"Default Options","text":"using AsyPlots # hide\nAsyPlots._DEFAULT_ARROW_KWARGS","category":"page"},{"location":"man/defaults/#","page":"Default Options","title":"Default Options","text":"using AsyPlots # hide\nENV[\"LINES\"] = 100 # hide\nAsyPlots._DEFAULT_PLOT2D_KWARGS","category":"page"},{"location":"man/defaults/#","page":"Default Options","title":"Default Options","text":"using AsyPlots # hide\nENV[\"LINES\"] = 100 # hide\nAsyPlots._DEFAULT_PLOT3D_KWARGS","category":"page"},{"location":"man/defaults/#","page":"Default Options","title":"Default Options","text":"using AsyPlots # hide\nAsyPlots._DEFAULT_POINT2D_KWARGS","category":"page"},{"location":"man/defaults/#","page":"Default Options","title":"Default Options","text":"using AsyPlots # hide\nAsyPlots._DEFAULT_PATH2D_KWARGS","category":"page"},{"location":"man/defaults/#","page":"Default Options","title":"Default Options","text":"using AsyPlots # hide\nAsyPlots._DEFAULT_CIRCLE2D_KWARGS","category":"page"},{"location":"man/defaults/#","page":"Default Options","title":"Default Options","text":"using AsyPlots # hide\nAsyPlots._DEFAULT_POLYGON2D_KWARGS","category":"page"},{"location":"man/defaults/#","page":"Default Options","title":"Default Options","text":"using AsyPlots # hide\nAsyPlots._DEFAULT_POINT3D_KWARGS","category":"page"},{"location":"man/defaults/#","page":"Default Options","title":"Default Options","text":"using AsyPlots # hide\nAsyPlots._DEFAULT_PATH3D_KWARGS","category":"page"},{"location":"man/defaults/#","page":"Default Options","title":"Default Options","text":"using AsyPlots # hide\nAsyPlots._DEFAULT_SURFACE_KWARGS","category":"page"},{"location":"man/defaults/#","page":"Default Options","title":"Default Options","text":"using AsyPlots # hide\nAsyPlots._DEFAULT_LABEL2D_KWARGS","category":"page"},{"location":"man/defaults/#","page":"Default Options","title":"Default Options","text":"using AsyPlots # hide\nAsyPlots._DEFAULT_LABEL3D_KWARGS","category":"page"},{"location":"man/overview/#Overview-1","page":"Overview","title":"Overview","text":"","category":"section"},{"location":"man/overview/#Primitives-1","page":"Overview","title":"Primitives","text":"","category":"section"},{"location":"man/overview/#","page":"Overview","title":"Overview","text":"A figure in AsyPlots consists of a list of graphics primitives wrapped in a Plot. The primitives are Point, Path, Polygon, Circle, Label, and Surface.","category":"page"},{"location":"man/overview/#","page":"Overview","title":"Overview","text":"using AsyPlots #\nL = [Path([-1 -1; 1 2]),\n     Point(0,0),\n     Circle((0,0),1),\n     Label(\"A\",(1,1)),\n     Polygon([2+im,3+im,1+2im])]\nPlot(L)\nsave(\"polygon.svg\",ans) # hide","category":"page"},{"location":"man/overview/#","page":"Overview","title":"Overview","text":"(Image: )","category":"page"},{"location":"man/overview/#Drawing-options-1","page":"Overview","title":"Drawing options","text":"","category":"section"},{"location":"man/overview/#","page":"Overview","title":"Overview","text":"Drawing instructions for each primitive may be supplied via keyword arguments. Properties like color, opacity, line width, and font size are packaged in a Pen object. A Path may also be given an Arrow.","category":"page"},{"location":"man/overview/#","page":"Overview","title":"Overview","text":"using AsyPlots # hide\nL = [Path([-1 -1; 1 2],pen=Pen(color=\"Purple\",linewidth=3),arrow=Arrow(12)),\n     Point(0,0,pen=Pen(color=\"DarkRed\",linewidth=3)),\n     Circle((0,0),1,fillpen=Pen(color=\"Blue\",opacity=0.4)),\n     Label(\"A\",(1,1),pen=Pen(fontsize=14)),\n     Polygon([2+im,3+im,1+2im],pen=NoPen(),fillpen=Pen(color=\"MidnightBlue\"))]\nPlot(L)\nsave(\"example2.svg\",ans) # hide","category":"page"},{"location":"man/overview/#","page":"Overview","title":"Overview","text":"(Image: )","category":"page"},{"location":"man/overview/#","page":"Overview","title":"Overview","text":"Keyword arguments to Pen may be given directly to the underlying primitive, in which case they are automatically wrapped into a Pen object:","category":"page"},{"location":"man/overview/#","page":"Overview","title":"Overview","text":"using AsyPlots # hide\nPoint(0,0,color=\"Green\",linewidth=2).pen","category":"page"},{"location":"man/overview/#","page":"Overview","title":"Overview","text":"Options applicable to the whole figure can be specified as keyword arguments to  Plot.","category":"page"},{"location":"man/overview/#","page":"Overview","title":"Overview","text":"Plot(L,axes=true,axisarrow=Arrow(),bgcolor=\"gray\",width=250)\nsave(\"example3.svg\",ans) # hide","category":"page"},{"location":"man/overview/#","page":"Overview","title":"Overview","text":"(Image: )","category":"page"},{"location":"man/overview/#plot-1","page":"Overview","title":"plot","text":"","category":"section"},{"location":"man/overview/#","page":"Overview","title":"Overview","text":"A convenience function plot is available for graphing arrays without having to work directly with graphics primitives. Keyword arguments are separated according to whether they are appropriate for the Plot or the Path/Surface object.","category":"page"},{"location":"man/overview/#","page":"Overview","title":"Overview","text":"using AsyPlots # hide\nusing Random; Random.seed!(3) # hide\ny = cumsum(cumsum(randn(1000)))\nplot(y,pen=Pen(color=\"DarkRed\"),axisarrow=Arrow())\nsave(\"red_random_walk.svg\",ans) # hide\nnothing # hide","category":"page"},{"location":"man/overview/#","page":"Overview","title":"Overview","text":"(Image: )","category":"page"},{"location":"man/overview/#","page":"Overview","title":"Overview","text":"using AsyPlots # hide\nusing LaTeXStrings\nusing Random; Random.seed!(1) # hide\nz = randn(5,5)\nplot(z,xmax=4.5,ymax=4.5,xlabel=L\"$x$\",ylabel=L\"$y$\",width=250)\nsave(\"surfplot.svg\",ans) # hide","category":"page"},{"location":"man/overview/#","page":"Overview","title":"Overview","text":"(Image: )","category":"page"},{"location":"man/overview/#","page":"Overview","title":"Overview","text":"interactive(P::Plot3D) opens a window for 3D graphic manipulation","category":"page"},{"location":"man/overview/#","page":"Overview","title":"Overview","text":"interactive(plot(randn(5,5)))","category":"page"},{"location":"man/isolines/#Isolines-1","page":"Isolines","title":"Isolines","text":"","category":"section"},{"location":"man/isolines/#","page":"Isolines","title":"Isolines","text":"using AsyPlots # hide\nisolines(0.0:0.1:10, 0.0:0.1:10, (x,y) -> 1 - (x^2 - y^2)/10)\nsave(\"isolines.svg\",ans) # hide\nnothing # hide","category":"page"},{"location":"man/isolines/#","page":"Isolines","title":"Isolines","text":"(Image: )","category":"page"},{"location":"man/isolines/#","page":"Isolines","title":"Isolines","text":"using AsyPlots # hide\nisolines(0.0:0.1:10, 0.0:0.1:10, (x,y) -> 1 - (x^2 - y^2)/10, lift = true)\nsave(\"isolines-lift.svg\",ans) # hide\nnothing # hide","category":"page"},{"location":"man/isolines/#","page":"Isolines","title":"Isolines","text":"(Image: )","category":"page"},{"location":"man/isolines/#","page":"Isolines","title":"Isolines","text":"isolines","category":"page"},{"location":"man/isolines/#AsyPlots.isolines","page":"Isolines","title":"AsyPlots.isolines","text":"isolines(xs, ys, zs; lift = false, interpolation = :cubic)    \n\nPlot the contour lines of the function whose values are represented\nby the array (or function) `zs`. If `lift` is true, plot in 3D.\n\nExample\n\n```julia-repl julia> isolines(0:10, 0:10, (x,y) -> (100 - x^2 + y^2)/10, lift = true)\n\n\n\n\n\n","category":"function"},{"location":"man/output/#Output-1","page":"Output","title":"Output","text":"","category":"section"},{"location":"man/output/#","page":"Output","title":"Output","text":"save","category":"page"},{"location":"man/output/#AsyPlots.save","page":"Output","title":"AsyPlots.save","text":"save(filename::AbstractString,\n     P::Union{Plot2D,Plot3D};\n     runasy=true,\n     forcepdf=false)\n\nSave Asymptote figure. If filename has extension .asy, then an asy file is saved together with any auxiliary data files.\n\nIf filename has extension .pdf, .svg or .png, then only the resulting image file is saved to the location filename\n\n\n\n\n\n","category":"function"},{"location":"man/heatmaps/#Heatmaps-1","page":"Heatmaps","title":"Heatmaps","text":"","category":"section"},{"location":"man/heatmaps/#","page":"Heatmaps","title":"Heatmaps","text":"PixelMap\nheatmap","category":"page"},{"location":"man/heatmaps/#AsyPlots.PixelMap","page":"Heatmaps","title":"AsyPlots.PixelMap","text":"PixelMap(pixels, lowerleft, upperright; kwargs...)\n\nA graphics primitive representing a two-dimensional array of pixels situated in the box with given lower left and upper  right corners.\n\npixels is an array of NamedColors, while lowerleft  and upperright are tuples.\n\nExamples\n\njulia> pixels = [x*NamedColor(\"blue\") + \n                    (1-x)*NamedColor(\"red\") \n                        for x in 0:0.1:1, y in 0:0.1:1]\njulia> PixelMap(pixels, (0,0), (1,1))\nPixelMap(<11×11>,[0,1]×[0,1])\n\n\n\n\n\n","category":"type"},{"location":"man/heatmaps/#AsyPlots.heatmap","page":"Heatmaps","title":"AsyPlots.heatmap","text":"heatmap(A; colors)\nheatmap(A, lowerleft, upperright; colors)\nheatmap(xs, ys, f::Function)\n\nPlot a heatmap of the values stored in the matrix A, using the colormap represented by the vector colors of NamedColors. Place the resulting PixelMap according to the given lowerleft and upperright tuples (which default to (0,0) and size(A)). \n\nExamples\n\njulia> heatmap(0:10, 0:10, (x,y) -> x^2 + y^2)\n\n\n\n\n\n","category":"function"},{"location":"man/heatmaps/#","page":"Heatmaps","title":"Heatmaps","text":"using AsyPlots # hide\nheatmap(1:10, 1:10, (x,y) -> x^2 + y^2, smooth = true)\nsave(\"heatmap.png\", ans) # hide\nnothing # hide","category":"page"},{"location":"man/heatmaps/#","page":"Heatmaps","title":"Heatmaps","text":"(Image: fgf)","category":"page"},{"location":"#AsyPlots.jl-1","page":"Home","title":"AsyPlots.jl","text":"","category":"section"},{"location":"#Introduction-1","page":"Home","title":"Introduction","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"AsyPlots is a Julia package for creating figures in Asymptote. Asymptote is a mature language for technical drawing in two and three dimensions. This package provides access to","category":"page"},{"location":"#","page":"Home","title":"Home","text":"2D vector graphics and high-quality, ray-traced 3D graphics\nLaTeX-rendered labels in 2D and 3D\nAn OpenGL renderer for interacting with 3D figures\nEasily customizable colors and arrows\nConvenience functions for line graphs and surface plots, with less of a time-to-first-plot penalty than some other packages\nAn environment designed for working directly with graphics primitives (points, paths, polygons, circles, parametric surfaces) in natural coordinates\nin-line plotting in IJulia and Juno's plot pane\nOptions to save output as asy, eps, pdf, svg, or png\nAn alternative Cairo backend, for speed","category":"page"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"AsyPlots requires Asymptote, which you might already have as a part of your TeX installation (run asy --version from the command line to check). If you want to use the Cairo backend, install Cairo.jl via Pkg.add(Cairo).","category":"page"},{"location":"#Examples-1","page":"Home","title":"Examples","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"using AsyPlots, Random, FFTW\nn = 250; Random.seed!(1)\nA = [(x,y) == (0,0) ? 0 : 1/(x^2+y^2) for x=0:n-1,y=0:n-1]\nB = randn(n,n)\nsave(\"fgf.png\",plot(real(fft(A.*B));width=400)) # hide\nplot(real(fft(A.*B)))\nnothing # hide","category":"page"},{"location":"#","page":"Home","title":"Home","text":"(Image: fgf)","category":"page"},{"location":"#","page":"Home","title":"Home","text":"using AsyPlots, Random # hide\nn = 100000; Random.seed!(2) # hide\nx = cumsum(rand(-1:1,n))\ny = cumsum(rand(-1:1,n))\nsave(\"rw.svg\",Plot(Path(x,y;color=\"White\"),   # hide\n      bgcolor=\"Black\", width=512,                 # hide\n      axispen=\"Red\",axes=true,axisarrow=Arrow())) # hide\nPlot(Path(x,y;color=\"White\"),\n     bgcolor=\"Black\",\n     axispen=\"Red\",\n     axes=true,\n     axisarrow=Arrow())\nnothing # hide","category":"page"},{"location":"#","page":"Home","title":"Home","text":"(Image: fgf)","category":"page"},{"location":"examples/examples3d/#D-Examples-1","page":"3D Examples","title":"3D Examples","text":"","category":"section"},{"location":"examples/examples3d/#","page":"3D Examples","title":"3D Examples","text":"using AsyPlots # hide\nrvals = range(0,2,length=40)\nthetavals = range(0,2π,length=40)\n\nf(x,y) = 5*(x^2+y^2)*exp(-x^2-y^2)\n\nxv = [r*cos(θ) for r=rvals,θ=thetavals]\nyv = [r*sin(θ) for r=rvals,θ=thetavals]\nzv = [f(r*cos(θ),r*sin(θ)) for r=rvals,θ=thetavals]\n\nPlot(Surface(xv,yv,zv,meshpen=Pen(color=0.1*NamedColor(1,1,1),linewidth=0.3),\n                      surfacepen=Pen(opacity=0.8)),\n     camera=(4,2,5),\n     xmax=2.2,\n     ymax=2.2)\nsave(\"hat.svg\",ans) # hide\nnothing # hide","category":"page"},{"location":"examples/examples3d/#","page":"3D Examples","title":"3D Examples","text":"(Image: )","category":"page"},{"location":"examples/examples3d/#","page":"3D Examples","title":"3D Examples","text":"using AsyPlots # hide\nr(u) = 2-cos(u);\nx(u,v) = 3*cos(u)*(1+sin(u))+r(u)*cos(v)*(u < pi ? cos(u) : -1)\ny(u,v) = 8*sin(u)+(u < pi ? r(u)*sin(u)*cos(v) : 0)\nz(u,v) = r(u)*sin(v)\nU = range(0,2π,length=60)\nV = range(0,2π,length=30)\nsp = Pen(opacity=0.9)\nc = [\"LightBlue\",\"MidnightBlue\",\"LightBlue\"]\nmp = Pen(color=0.2*NamedColor(1,1,1),linewidth=0.3)\nPlot(Surface([x(u,v) for u=U,v=V],\n             [y(u,v) for u=U,v=V],\n             [z(u,v) for u=U,v=V],surfacepen=sp,meshpen=mp,colors=c),\n             axes=false,camera=(10,-15,8))\nsave(\"klein.svg\",ans) # hide\nnothing # hide","category":"page"},{"location":"examples/examples3d/#","page":"3D Examples","title":"3D Examples","text":"(Image: )","category":"page"},{"location":"man/pens/#Pens-and-Arrows-1","page":"Pens and Arrows","title":"Pens and Arrows","text":"","category":"section"},{"location":"man/pens/#Pens-1","page":"Pens and Arrows","title":"Pens","text":"","category":"section"},{"location":"man/pens/#","page":"Pens and Arrows","title":"Pens and Arrows","text":"Colors are stored in a NamedColor.","category":"page"},{"location":"man/pens/#","page":"Pens and Arrows","title":"Pens and Arrows","text":"NamedColor","category":"page"},{"location":"man/pens/#AsyPlots.NamedColor","page":"Pens and Arrows","title":"AsyPlots.NamedColor","text":"NamedColor(name::String,color::RGB)\n\nA named ColorTypes.RGB\n\nExamples\n\njulia> NamedColor(\"DarkGreen\")\nNamedColor(\"DarkGreen\",(0.0, 0.39, 0.0))\n\n\n\n\n\n","category":"type"},{"location":"man/pens/#","page":"Pens and Arrows","title":"Pens and Arrows","text":"The second argument may be omitted, in which case Colors.parse is used to map the specified string to an appropriate RGB triple. The RGB triple is used for the Cairo backend, while only the name is passed to Asymptote (unless name == \"\", in which case the RGB triple is used). Both Asymptote and Colors.jl will correctly handle the X11 named colors.","category":"page"},{"location":"man/pens/#","page":"Pens and Arrows","title":"Pens and Arrows","text":"Options for plotting (color, line width, opacity, and font size) are specified using a Pen object.","category":"page"},{"location":"man/pens/#","page":"Pens and Arrows","title":"Pens and Arrows","text":"Pen","category":"page"},{"location":"man/pens/#AsyPlots.Pen","page":"Pens and Arrows","title":"AsyPlots.Pen","text":"Pen(color::NamedColor,\n    opacity::Real,\n    linewidth::Real,\n    other::String)\n\nStore drawing properties\n\nExamples\n\njulia> Pen(color=\"DarkGreen\",opacity=0.5)\nPen(color=DarkGreen,opacity=0.5)\n\n\n\n\n\n","category":"type"},{"location":"man/pens/#","page":"Pens and Arrows","title":"Pens and Arrows","text":"The function NoPen() returns a pen which specifies no drawing. This may be used, for example, as the fillpen for a polygon which should not be filled in.","category":"page"},{"location":"man/pens/#Arrows-1","page":"Pens and Arrows","title":"Arrows","text":"","category":"section"},{"location":"man/pens/#","page":"Pens and Arrows","title":"Pens and Arrows","text":"Each Path2D or Path3D object has an arrow field for specifying how an arrow should be drawn on the path. A default arrow in 2D/3D can be created using Arrow()/Arrow3(). ","category":"page"},{"location":"man/pens/#","page":"Pens and Arrows","title":"Pens and Arrows","text":"Arrow","category":"page"},{"location":"man/pens/#AsyPlots.Arrow","page":"Pens and Arrows","title":"AsyPlots.Arrow","text":"Arrow(name::AbstractString,\n      size::Real,\n      position::Real)\n\nStore instructions for drawing an arrow\n\nposition is an element of [0,1] which indicates how far along the path the arrow should be drawn\n\nNoArrow() returns a no-arrow instruction, while Arrow3() gives an arrow suitable for 3D paths\n\n\n\n\n\n","category":"type"}]
}