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
            IEnumerable<Stream> FiveSoonest = _context.Streams
                .Where(s => s.StartTime > DateTime.Today)
                .OrderBy(s => s.StartTime)
                .Include(s => s.Game)
                .Take(5);
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

        [HttpDelete("/api/stream/{StreamId}")]
        public JsonResult DeleteStream(int StreamId)
        {
            Stream ToDelete = _context.Streams
                .FirstOrDefault(s => s.StreamId == StreamId);
            if(ToDelete != null)
            {
                _context.Streams.Remove(ToDelete);
                _context.SaveChanges();
                return Json(new { message = "success" });
            }
            else 
            {
                System.Console.WriteLine("thing don't work");
                Response.StatusCode = 400;
                return Json(ModelState);
            }

        }

        


    }
}