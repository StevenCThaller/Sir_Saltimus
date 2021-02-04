using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Server.Models
{
    public class GamesOnStream
    {
        [Key]
        public int GamesOnStreamId { get; set; }

        public int GameId { get; set; }
        public Game Game { get; set; }

        public int StreamId { get; set; }
        public Stream Stream { get; set; }

        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}