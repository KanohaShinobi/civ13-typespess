const { Component } = require("./../../../../../../code/game/server.js");

const _ = require("underscore");

const first_names = require("../../../../../../strings/names/first.json");
const last_names = require("../../../../../../strings/names/last.json");

class HumanMob extends Component {
	constructor(atom, template) {
		super(atom, template);
		this.Civilization = ""
		if (!this.a.name) {
			let first_name = _.sample(first_names);
			let last_name = _.sample(last_names);
			this.a.name = `${first_name} ${last_name}`;
		}
	}
}

HumanMob.depends = ["CarbonMob", "MobBodyParts", "MobInventory", "MobMovement"];
HumanMob.loadBefore = [
	"CarbonMob",
	"MobBodyParts",
	"MobInventory",
	"MobMovement",
];

HumanMob.template = {
	vars: {
		components: {
			MobInteract: {
				zone_sel_template: "human_zone_sel",
				advanced_tool_user: true,
			},
			MobInventory: {
				handcuffable: true,
			}
		},
	},
};

module.exports.components = { HumanMob };
