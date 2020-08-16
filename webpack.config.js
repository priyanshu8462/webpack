const path =require('path');
module.exports ={
   entry : "./src/index.js",
   output : {
      filename : "bundle.js",
      path : path.resolve(__dirname,'dist')
   },
   mode : "development",
   module : {
      rules : [
         // for css files
         {
            test :/\.css$/,
            use :[
               "style-loader",
               "css-loader"
            ]
         },
         // for font files
         {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
               'file-loader',
               ],
         },
         // for images, svg, gif
         {
            test :  /\.(png|jpg|svg|gif)$/,
            use : [
               "file-loader"
            ]
         },
         //for csv
         {
            test : /\.(csv|tsv)$/,
            use : [ "csv-loader" ]
         },
         //for xml
         {
            test : /\.xml$/,
            use :["xml-loader"]
         }
      ]
   }
};