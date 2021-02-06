using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Server.Models;

namespace Server.Controllers
{
    public class StreamController : Controller
    {
        private MyContext _context;

        public StreamController(MyContext context)
        {
            _context = context;
        }

        [HttpGet("/api/stream")]
        public JsonResult GetStreams()
        {
            List<Stream> FiveSoonest = _context.Streams
                .Include(s => s.Game)
                .Where(s => s.StartTime > DateTime.Now)
                .Take(5)
                .ToList();
            return Json(FiveSoonest);
        }

        [HttpPost("/api/stream")]
        public JsonResult CreateStream([FromBody] ReactStream FromReact)
        {
            // System.Console.WriteLine(FromReact.StartTime);
            if(ModelState.IsValid)
            {
                Stream ToAdd = new Stream()
                {
                    StreamTitle = FromReact.StreamTitle,
                    GameId = Int32.Parse(FromReact.GameId),
                    StartTime = FromReact.StartTime
                };
                _context.Add(ToAdd);
                _context.SaveChanges();
                return Json(ToAdd);
            }
            else 
            {
                Response.StatusCode = 400;
                return Json(ModelState);
            }
        }

        


    }
}