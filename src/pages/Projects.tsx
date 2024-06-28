import Navbar from "../Navbar";

export default function Projects() {
    return(
        <>
        <Navbar />

        <div className="flex flex-col pl-10">
            <h3 className="pt-10 pb-12 flex justify-center">Projects:</h3>

	    <div className="flex flex-row justify-evenly items-start flex-wrap gap-14">

	    	<div className="projects-styles">
			<img src="https://placehold.co/600x400" className="max-w-[25rem] m-5" alt="#" />
			<h4>This Website <a href="https://github.com/illy-dev/illy-dev.github.io">🔗</a></h4>
			<p className="pb-2">My Personal Website</p>
		</div>
		<div className="projects-styles">
			<img src="../assets/discord_bot.png" className="max-w-[25rem] m-5" alt="discord bot" />
			<h4>Simple Discord Bot <a href="https://github.com/illy-dev/simple-discord-bot">🔗</a></h4>
			<p className="pb-2">Discord Bot with fun commands</p>
		</div>

		<div className="projects-styles">
			<img src="../assets/fastfetch_config.png" className="max-w-[25rem] m-5" alt="fastfetch config" />
			<h4>Fastfetch config <a href="https://github.com/illy-dev/fastfetch-config">🔗</a></h4>
			<p className="pb-2">Beautiful configuration for the fastfetch-cli</p>
		</div>

		<div className="projects-styles">
			<img src="../assets/free_games_cli.png" className="max-w-[25rem] m-5" alt="free games cli" />
			<h4>free-game-cli <a href="https://github.com/illy-dev/free-game-cli">🔗</a></h4>
			<p className="pb-2">Cli to find out which free2play game to play</p>
		</div>

		<div className="projects-styles">
			<img src="https://placehold.co/600x400" className="max-w-[25rem] m-5" alt="#" />
			<h4>Example text <a href="https://github.com/illy-dev/fastfetch-config">🔗</a></h4>
			<p className="pb-2">This text is here so that it looks better</p>
		</div>

		<div className="projects-styles">
			<img src="https://placehold.co/600x400" className="max-w-[25rem] m-5" alt="#" />
			<h4>Example text <a href="https://github.com/illy-dev/fastfetch-config">🔗</a></h4>
			<p className="pb-2">This text is here so that it looks better</p>
		</div>
	    </div>

        </div>
        </>
    );
}
