// using System.Threading.Tasks;
// using Microsoft.AspNetCore.Authentication;
// using Microsoft.AspNetCore.Authentication.Cookies;
// using Microsoft.AspNetCore.Mvc;
// using Server.Extensions;

// namespace Server.Controllers
// {
//     public class AuthenticationController : Controller
//     {
//         // [HttpGet("/api/signin")]
//         // public async Task<IActionResult> SignIn() => View("SignIn", await HttpContext.GetExternalProvidersAsync());
//         [HttpPost("/api/signin")]
//         public async Task<IActionResult> SignIn([FromForm] string provider)
//         {
//             var data = await HttpContext.GetExternalProvidersAsync();
//             if(string.IsNullOrWhiteSpace(provider))
//             {
//                 return BadRequest();
//             }

//             if(!await HttpContext.IsProviderSupportedAsync(provider))
//             {
//                 return BadRequest();
//             }

//             return Challenge(new AuthenticationProperties { RedirectUri = "/" }, provider);
//         }



//     }
// }