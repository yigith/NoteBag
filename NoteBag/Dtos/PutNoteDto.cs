namespace NoteBag.Dtos
{
    public class PutNoteDto
    {
        public int Id { get; set; }

        [Required, MaxLength(200)]
        public string Title { get; set; }

        public string Content { get; set; }
    }
}
