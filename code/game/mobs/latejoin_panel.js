const { Panel } = require("./../../../code/game/server.js");

class LatejoinPanel extends Panel {
	constructor(client) {
		super(client, {
			width: 660,
			height: 500,
			title: "Roles",
			can_close: true,
		});
		this.on("message", this.message_handler.bind(this));
	}

	open() {
		super.open();
		let jobs_msg = {};
		for (let [id, job] of Object.entries(
			this.client.server.job_controller.jobs
		)) {
			jobs_msg[id] = {
				title: job.title,
				total_positions: job.total_positions,
				current_positions: job.current_positions,
				departments: job.departments,
				selection_color: job.selection_color,
			};
		}
		this.send_message({ jobs: jobs_msg });
	}

	message_handler(msg) {
		if (msg.join) {
			if (
				this.client.server.ticker.game_state != "playing" ||
		this.client.server.ticker.busy
			)
				return;
			let job = this.client.server.job_controller.jobs[msg.join];
			if (!job) return;
			if (
				job.current_positions >= job.total_positions &&
		job.total_positions != -1
			)
				return;
			job.current_positions++;
			let mob = job.instance(
				this.client.server,
				this.client.character_preferences
			);
			this.client.server.job_controller.send_to_late_join(mob);
			mob.c.Mob.client = this.client;
			job.after_spawn(mob);
		}
	}
}

module.exports = LatejoinPanel;
