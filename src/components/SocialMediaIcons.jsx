const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500 "
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <img className="w-7" alt="linkedin-link" src="assets/linkedin.svg"/>
      </a>
      <a
        className="hover:opacity-50 transition duration-500 "
        href="https://www.github.com"
        target="_blank"
        rel="noreferrer"
      >
        <img className="w-7" alt="github-link" src="assets/github.svg"/>
      </a>
    </div>
  )
}

export default SocialMediaIcons