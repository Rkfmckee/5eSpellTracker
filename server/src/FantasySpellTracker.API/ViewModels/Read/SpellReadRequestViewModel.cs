﻿using Microsoft.AspNetCore.Mvc;

namespace FantasySpellTracker.API.ViewModels.Read;

public class SpellReadRequestViewModel : ReadRequestViewModel
{
    [FromQuery(Name = "sid")]
    public int[]? SourceIds { get; set; }

    [FromQuery(Name = "cid")]
    public int[]? ClassIds { get; set; }
}
