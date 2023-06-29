export default `
gantt
    dateFormat  YYYY-MM-DD
    axisFormat %b
    tickInterval 1month
    title ARK Teams Critical Path to Internal Ministry Ready
    excludes weekends
    section IMR
    Plat. Beta Relese :   active, c, 2023-06-23,2023-08-18 
    Plat. Functional Testing :   d, 2023-08-18,2023-09-25
    DC01 Shutdown       :          crit, a, 2023-07-10,4d
    DC01 PowerUp        :          crit, b, 2023-07-31,4d    
    Infra CLT Testing   :   active, e, 2023-06-23,2023-08-11
    Infra DC01 Redeploy :  f, 2023-08-11,2w
    Internal Ministry Ready : crit, g, 2023-06-23,2023-09-25
    
    `;
