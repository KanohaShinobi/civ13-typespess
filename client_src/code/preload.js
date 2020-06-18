

let preload_list = [
	"icons/effects/parallax.png",
	"icons/mob/screen_gen.png",
	"icons/mob/screen_midnight.png",
	"icons/mob/screen_full.png",
	"icons/obj/clothing/uniforms.png",
	"icons/obj/clothing/suits.png",
	"icons/obj/card.png",
	"icons/obj/storage.png",
	"icons/obj/clothing/shoes.png",
	"icons/obj/smooth_structures/reinforced_window.png",
	"icons/obj/structures.png",
	"icons/obj/smooth_structures/wood_table.png",
	"icons/turf/floors.png",
	"icons/obj/lighting.png",
	"icons/obj/chairs.png",
	"icons/obj/objects.png",
	"icons/turf/walls/wall.png",
	"icons/obj/doors/airlocks/station/public.png",
	"icons/obj/doors/airlocks/station/overlays.png",
	"icons/obj/power_cond/cables.png",
	"icons/obj/power.png",
	"icons/obj/closet.png",
	"icons/obj/doors/airlocks/station/maintenance.png",
	"icons/turf/walls/reinforced_wall.png",
	"icons/obj/smooth_structures/reinforced_table.png",
	"icons/obj/doors/airlocks/station/security.png",
	"icons/mob/human_parts_greyscale.png",
	"icons/mob/feet.png",
	"icons/mob/uniform.png",
	"icons/mob/back.png",
	"icons/mob/human_face.png",
	"icons/mob/suit.png",
	"icons/obj/doors/airlocks/station/command.png",
	"icons/obj/doors/airlocks/station2/overlays.png",
	"icons/obj/doors/airlocks/station2/glass.png",
	"icons/obj/smooth_structures/table.png",
	"icons/obj/stack_objects.png",
	"icons/obj/device.png",
	"icons/obj/tools.png",
	"icons/obj/stationobjs.png",
	"icons/obj/clothing/gloves.png",
	"icons/turf/floors/carpet.png",
	"icons/turf/floors/nature.png",
	"icons/obj/smooth_structures/window.png",
	"icons/obj/doors/airlocks/station/mining.png",
	"icons/obj/smooth_structures/lattice.png",
	"icons/obj/doors/airlocks/station/engineering.png",
	"icons/obj/janitor.png",
	"icons/obj/doors/airlocks/station/medical.png",
	"icons/obj/chemical.png",
	"icons/turf/walls/shuttle_wall.png",
	"icons/obj/doors/airlocks/shuttle/shuttle.png",
	"icons/obj/doors/airlocks/shuttle/overlays.png",
	"icons/obj/smooth_structures/shuttle_window.png",
	"icons/obj/doors/airlocks/external/external.png",
	"icons/obj/doors/airlocks/external/overlays.png",
];

module.exports = async function preload(client) {
	for (let path of preload_list) {
		if (!client.icon_metas[path]) await client.enqueue_icon_meta_load(path);
	}
};
