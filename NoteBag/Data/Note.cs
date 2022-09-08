namespace NoteBag.Data
{
    public class Note
    {
        public int Id { get; set; }

        [Required, MaxLength(200)]
        public string Title { get; set; }

        public string Content { get; set; }

        public DateTimeOffset CreatedTime { get; set; } = DateTimeOffset.Now;

        public DateTimeOffset ModifiedTime { get; set; } = DateTimeOffset.Now;
    }
}
