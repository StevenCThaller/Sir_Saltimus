using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Server.Models
{
    public class ReactStream
    {

        [Required]
        public string StreamTitle { get; set; }

        [Required]
        public string GameId { get; set; }
        // public Game Game { get; set; }

        [Required]
        public DateTime StartTime { get; set; }
    }
}