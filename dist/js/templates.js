    var templates = {};
    templates['controls'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"player-controls\">");t.b("\n" + i);t.b("	<div class=\"player-progress\">");t.b("\n" + i);t.b("		<progress class=\"player-progress-played\" max=\"100\" value=\"0\">");t.b("\n" + i);t.b("			<span>0</span>% played");t.b("\n" + i);t.b("		</progress>");t.b("\n" + i);t.b("		<progress class=\"player-progress-buffer\" max=\"100\" value=\"0\">");t.b("\n" + i);t.b("			<span>0</span>% buffered");t.b("\n" + i);t.b("		</progress>");t.b("\n" + i);t.b("	</div>");t.b("\n" + i);t.b("	<span class=\"player-controls-playback\">");t.b("\n" + i);t.b("		<button type=\"button\" data-player=\"restart\">");t.b("\n" + i);t.b("			<svg><use xlink:href=\"#icon-refresh\"></use></svg>");t.b("\n" + i);t.b("			<span class=\"sr-only\">Restart</span>");t.b("\n" + i);t.b("		</button>");t.b("\n" + i);t.b("		<button type=\"button\" data-player=\"rewind\">");t.b("\n" + i);t.b("			<svg><use xlink:href=\"#icon-rewind\"></use></svg>");t.b("\n" + i);t.b("			<span class=\"sr-only\">Rewind <span class=\"player-seek-time\">{seektime}</span> seconds</span>");t.b("\n" + i);t.b("		</button>");t.b("\n" + i);t.b("		<button type=\"button\" data-player=\"play\">");t.b("\n" + i);t.b("			<svg><use xlink:href=\"#icon-play\"></use></svg>");t.b("\n" + i);t.b("			<span class=\"sr-only\">Play</span>");t.b("\n" + i);t.b("		</button>");t.b("\n" + i);t.b("		<button type=\"button\" data-player=\"pause\">");t.b("\n" + i);t.b("			<svg><use xlink:href=\"#icon-pause\"></use></svg>");t.b("\n" + i);t.b("			<span class=\"sr-only\">Pause</span>");t.b("\n" + i);t.b("		</button>");t.b("\n" + i);t.b("		<button type=\"button\" data-player=\"fast-forward\">");t.b("\n" + i);t.b("			<svg><use xlink:href=\"#icon-fast-forward\"></use></svg>");t.b("\n" + i);t.b("			<span class=\"sr-only\">Fast forward <span class=\"player-seek-time\">{seektime}</span> seconds</span>");t.b("\n" + i);t.b("		</button>");t.b("\n" + i);t.b("		<span class=\"player-time\">");t.b("\n" + i);t.b("			<span class=\"sr-only\">Time</span>");t.b("\n" + i);t.b("			<span class=\"player-duration\">00:00</span>");t.b("\n" + i);t.b("		</span>");t.b("\n" + i);t.b("	</span>");t.b("\n" + i);t.b("	<span class=\"player-controls-sound\">");t.b("\n" + i);t.b("		<input class=\"inverted sr-only\" id=\"mute{id}\" type=\"checkbox\" data-player=\"mute\">");t.b("\n" + i);t.b("		<label id=\"mute{id}\" for=\"mute{id}\">");t.b("\n" + i);t.b("			<svg class=\"icon-muted\"><use xlink:href=\"#icon-muted\"></use></svg>");t.b("\n" + i);t.b("			<svg><use xlink:href=\"#icon-sound\"></use></svg>");t.b("\n" + i);t.b("			<span class=\"sr-only\">Mute</span>");t.b("\n" + i);t.b("		</label>");t.b("\n");t.b("\n" + i);t.b("		<label for=\"volume{id}\" class=\"sr-only\">Volume</label>");t.b("\n" + i);t.b("		<input id=\"volume{id}\" class=\"player-volume\" type=\"range\" min=\"0\" max=\"10\" value=\"5\" data-player=\"volume\">");t.b("\n");t.b("\n" + i);t.b("		<input class=\"sr-only\" id=\"captions{id}\" type=\"checkbox\" data-player=\"captions\">");t.b("\n" + i);t.b("		<label for=\"captions{id}\">");t.b("\n" + i);t.b("			<svg><use xlink:href=\"#icon-bubble\"></use></svg>");t.b("\n" + i);t.b("			<span class=\"sr-only\">Captions</span>");t.b("\n" + i);t.b("		</label>");t.b("\n");t.b("\n" + i);t.b("		<button type=\"button\" data-player=\"fullscreen\">");t.b("\n" + i);t.b("			<svg class=\"icon-exit-fullscreen\"><use xlink:href=\"#icon-collapse\"></use></svg>");t.b("\n" + i);t.b("			<svg><use xlink:href=\"#icon-expand\"></use></svg>");t.b("\n" + i);t.b("			<span class=\"sr-only\">Toggle fullscreen</span>");t.b("\n" + i);t.b("		</button>");t.b("\n" + i);t.b("	</span>");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }});