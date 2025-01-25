﻿namespace FantasySpellTracker.DAL.Entities;

public class Class : Entity
{
    public required string Name { get; set; }

    #region Relationships

    public IEnumerable<SubClass>? SubClasses { get; set; }
    public IEnumerable<ClassSpell>? ClassSpells { get; set; }

    #endregion
}
