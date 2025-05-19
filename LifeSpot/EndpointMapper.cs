public static class EndpointMapper
   {
       /// <summary>
       ///  Маппинг CSS-файлов
       /// </summary>
       public static void MapCss(this IEndpointRouteBuilder builder)
       {
           var cssFiles = new[] { "index.css" };

           foreach (var fileName in cssFiles)
           {
               builder.MapGet($"/Static/CSS/{fileName}", async context =>
               {
                   var cssPath = Path.Combine(Directory.GetCurrentDirectory(), "Static", "CSS", fileName);
                   var css = await File.ReadAllTextAsync(cssPath);
                   await context.Response.WriteAsync(css);
               });
             }
       	}

       	/// <summary>
        ///  Маппинг JS
        /// </summary>
        public static void MapJs(this IEndpointRouteBuilder builder)
        {
           var jsFiles = new[] { "index.js", "testing.js", "about.js" };

           foreach (var fileName in jsFiles)
           {
               builder.MapGet($"/Static/JS/{fileName}", async context =>
               {
                   var jsPath = Path.Combine(Directory.GetCurrentDirectory(), "Static", "JS", fileName);
                   var js = await File.ReadAllTextAsync(jsPath);
                   await context.Response.WriteAsync(js);
               });
           }
        }

        /// <summary>
        ///  Маппинг Html-страниц
        /// </summary>
        public static void MapHtml(this IEndpointRouteBuilder builder, IWebHostEnvironment env)
        {
            Console.WriteLine("MapHtml() вызван!!!");
           string footerPath = Path.Combine(env.ContentRootPath, "Views", "Shared", "footer.html");
           string sidebarPath = Path.Combine(env.ContentRootPath, "Views", "Shared", "sidebar.html");
           string sliderPath = Path.Combine(env.ContentRootPath, "Views", "Shared", "slider.html");

           builder.MapGet("/", async context =>
           {
               var viewPath = Path.Combine(env.ContentRootPath, "Views", "index.html");
               var viewText = await File.ReadAllTextAsync(viewPath);

               // Загружаем шаблон страницы, вставляя в него элементы
               var html =  new StringBuilder(await File.ReadAllTextAsync(viewPath))
                   .Replace("<!--SIDEBAR-->", sideBarHtml)
                   .Replace("<!--FOOTER-->", footerHtml);

               await context.Response.WriteAsync(html.ToString());
           });

           builder.MapGet("/testing", async context =>
           {
               var viewPath = Path.Combine(Path.Combine(env.ContentRootPath, "Views", "testing.html");

               // Загружаем шаблон страницы, вставляя в него элементы
               var html =  new StringBuilder(await File.ReadAllTextAsync(viewPath))
                   .Replace("<!--SIDEBAR-->", sideBarHtml)
                   .Replace("<!--FOOTER-->", footerHtml);

               await context.Response.WriteAsync(html.ToString());
           });

           builder.MapGet("/about", async context =>
                      {
                          var viewPath = Path.Combine(Path.Combine(env.ContentRootPath, "Views", "about.html");

                          var html =  new StringBuilder(await File.ReadAllTextAsync(viewPath))
                              .Replace("<!--SIDEBAR-->", sideBarHtml)
                              .Replace("<!--FOOTER-->", footerHtml)
                              // Загрузка слайдера
                              .Replace("<!--SLIDER-->", sliderHtml);

                          await context.Response.WriteAsync(html.ToString());
                          Console.WriteLine("Builder Map Get Для файла About - выполнился!")
                      });
        }
}