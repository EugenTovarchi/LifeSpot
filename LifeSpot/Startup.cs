using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.DependencyInjection;
using System.IO;

public class Startup
{
   public void ConfigureServices(IServiceCollection services)
   {
   }

   public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
   {
       if (env.IsDevelopment())
           app.UseDeveloperExceptionPage();

       app.UseRouting();

       app.UseEndpoints(endpoints =>
       {
           // Маппинг статических файлов

           endpoints.MapCss();
           endpoints.MapJs();
           endpoints.MapHtml();
       });
   }
}