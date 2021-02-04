using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Server.Models;

namespace Server.Controllers
{
    public class GameController : Controller
    {
        private MyContext _context;

        public GameController(MyContext context)
        {
            _context = context;
        }

        [HttpPost("/api/game")]
        public JsonResult CreateGame([FromBody] Game FromReact)
        {
            if(ModelState.IsValid)
            {
                _context.Add(FromReact);
                _context.SaveChanges();
                return Json(FromReact);
            }
            else
            {
                Response.StatusCode = 400;
                return Json(ModelState);
            }
        }

        [HttpGet("/api/games")]
        public JsonResult GetGames()
        {
            return Json(_context.Games.ToList());
        }
    }
}