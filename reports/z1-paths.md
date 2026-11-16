# Paths to Z1

This report lists, for each competition in `registers/competitions.yaml`, its licence zone today and the best legitimate way to move its texts to zone Z1 (full text, open), as defined in spec 11 of olymmath-agent. It was made on 2026-11-16 from the registers and the front matter of `problems/` on main. It changes no zone: each move needs its own commit with its basis (a licence on the page, a public-domain rule of spec 11.9, or a granted row of `registers/permissions.yaml`).

Records are problem files in `problems/` (by the zone of their canonical statement); positions are the expected positions from `reports/coverage/coverage.json`, or the records when there are more records than expected positions (competitions with no expected count yet). Rows of aggregators (Hugging Face datasets, MathNet, Wikipedia, Reddit, books) count under the competition they copy, because that competition's organizer holds the rights.

## Totals

| Route | Records | Positions |
|---|---:|---:|
| Z1 now | 391 | 391 |
| public domain, certain (spec 11.9) | 0 | 0 |
| public domain, candidate (needs an author or renewal check) | 750 | 1136 |
| open licence or open terms found | 85 | 85 |
| permission request (a row of `registers/permissions.yaml`) | 49770 | 56065 |
| none known | 0 | 0 |
| all | 50996 | 57677 |

Positions for "Z1 now" are the records already in Z1. Positions for permission are the positions of the competition less the other routes, so they include positions with no record yet. Candidate public-domain years stay in their zone until the check in spec 11.9 is done.

## By competition

| Competition | Name | Positions | Records | Z1 now | Zone now | Best Z1 route | Detail |
|---|---|---:|---:|---:|---|---|---|
| `ad-mo` | Andorra national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission ad-mo (P3): 0 records |
| `ae-mo` | United Arab Emirates national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission ae-mo (P3): 0 records |
| `ahsme` | American High School Mathematics Examination | 1810 | 1267 | 0 | Z2 1267 | public domain 1950-1963 (candidate) | public domain 1950-1963 (PD-US-RENEWAL; candidate: needs a renewal search of the MAA booklets): 445 records; permission maa (P0): 822 records |
| `aime` | American Invitational Mathematics Examination | 1065 | 1060 | 0 | Z2 1060 | permission request | permission maa (P0): 1060 records |
| `al-cup` | Albanians Cup in Mathematics | 0 | 0 | 0 | no records | permission request | permission al-cup (P3): 0 records |
| `al-jbmo-tst` | Albania JBMO Team Selection Test | 0 | 0 | 0 | no records | permission request | permission al-mo (P3): 0 records |
| `al-mo` | Albania national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission al-mo (P3): 0 records |
| `al-tst` | Albania Team Selection Test | 0 | 0 | 0 | no records | permission request | permission al-mo (P3): 0 records |
| `al-xk-mo` | Kosovo and Albania Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission al-mo (P3): 0 records |
| `alibaba` | Alibaba Global Mathematics Competition | 20 | 20 | 0 | Z2 20 | permission request | permission alibaba (P3): 20 records |
| `am-mo` | Armenia national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission am-mo (P3): 0 records |
| `amc10` | AMC 10 | 1350 | 749 | 0 | Z2 749 | permission request | permission maa (P0): 749 records |
| `amc12` | AMC 12 | 1350 | 1262 | 0 | Z2 1262 | permission request | permission maa (P0): 1262 records |
| `amc8` | AMC 8 | 1025 | 914 | 0 | Z2 914 | permission request | permission maa (P0): 914 records |
| `amo-bench` | AMO-Bench | 49 | 49 | 49 | Z1 | already Z1 |  |
| `apmo` | Asian Pacific Mathematics Olympiad | 190 | 190 | 0 | Z2 190 | permission request | permission apmo (P2): 190 records |
| `ar-conosur-tst` | Argentine Cono Sur Team Selection Test | 0 | 0 | 0 | no records | permission request | permission oma (P2): 0 records |
| `ar-ibero-tst` | Argentine Iberoamerican Team Selection Test | 0 | 0 | 0 | no records | permission request | permission oma (P2): 0 records |
| `ar-nandu` | Ñandú | 0 | 0 | 0 | no records | permission request | permission oma (P2): 0 records |
| `ar-oma` | Argentine Mathematical Olympiad | 18 | 18 | 0 | Z2 18 | permission request | permission oma (P2): 18 records |
| `arab` | Arab Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission arab (P3): 0 records |
| `arml` | American Regions Mathematics League | 0 | 0 | 0 | no records | permission request | permission arml (P3): 0 records |
| `asmt` | A-Star Math Tournament | 0 | 0 | 0 | no records | permission request | permission asmt (P3): 0 records |
| `at-oemo` | Austrian Mathematical Olympiad | 264 | 212 | 0 | Z2 212 | permission request | permission oemo (P1): 212 records |
| `at-oemo-beg` | Austrian Mathematical Olympiad, Beginners' Competition | 96 | 56 | 0 | Z2 56 | permission request | permission oemo (P1): 56 records |
| `at-oemo-fed1` | Austrian Mathematical Olympiad, Federal Competition Part 1 | 96 | 95 | 0 | Z2 95 | permission request | permission oemo (P1): 95 records |
| `at-oemo-reg` | Austrian Mathematical Olympiad, Regional Competition | 112 | 112 | 0 | Z2 112 | permission request | permission oemo (P1): 112 records |
| `au-aimo` | Australian Intermediate Mathematics Olympiad | 0 | 0 | 0 | no records | permission request | permission amt (P1): 0 records |
| `au-amc` | Australian Mathematics Competition | 0 | 0 | 0 | no records | permission request | permission amt (P1): 0 records |
| `au-amo` | Australian Mathematical Olympiad | 384 | 40 | 0 | Z2 40 | permission request | permission amt (P1): 40 records |
| `au-amoc-senior` | AMOC Senior Contest | 0 | 0 | 0 | no records | permission request | permission amt (P1): 0 records |
| `au-mcyb` | Maths Challenge for Young Australians | 0 | 0 | 0 | no records | permission request | permission amt (P1): 0 records |
| `au-unsw` | UNSW School Mathematics Competition | 0 | 0 | 0 | no records | permission request | permission unsw (P3): 0 records |
| `au-wajo` | WA Junior Mathematics Olympiad | 0 | 0 | 0 | no records | permission request | permission uwa (P3): 0 records |
| `austrian-polish` | Austrian-Polish Mathematics Competition | 268 | 266 | 0 | Z2 266 | permission request | permission oemo (P1): 266 records |
| `az-istek` | Istek Lyceum Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission az-istek (P3): 0 records |
| `az-jmo` | Azerbaijan Junior Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission az-mo (P3): 0 records |
| `az-jtst` | Azerbaijan Junior Team Selection Tests | 0 | 0 | 0 | no records | permission request | permission az-mo (P3): 0 records |
| `az-lotfi-zadeh` | Lotfi Zadeh Olympiad | 0 | 0 | 0 | no records | permission request | permission az-lotfi-zadeh (P3): 0 records |
| `az-mo` | Azerbaijan national mathematics olympiad | 9 | 9 | 0 | Z2 9 | permission request | permission az-mo (P3): 9 records |
| `az-tst` | Azerbaijan Team Selection Tests | 0 | 0 | 0 | no records | permission request | permission az-mo (P3): 0 records |
| `ba-egmo-tst` | Bosnia and Herzegovina EGMO Team Selection Test | 0 | 0 | 0 | no records | permission request | permission ba-mo (P3): 0 records |
| `ba-jbmo-tst` | Bosnia and Herzegovina JBMO Team Selection Test | 0 | 0 | 0 | no records | permission request | permission ba-mo (P3): 0 records |
| `ba-mo` | Bosnia and Herzegovina national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission ba-mo (P3): 0 records |
| `ba-srpska` | Republic of Srpska Regional Olympiad | 0 | 0 | 0 | no records | permission request | permission ba-srpska (P3): 0 records |
| `ba-tst` | Bosnia and Herzegovina Team Selection Test | 0 | 0 | 0 | no records | permission request | permission ba-mo (P3): 0 records |
| `balkan` | Balkan Mathematical Olympiad | 172 | 168 | 0 | Z2 168 | permission request | permission balkan-mo (P1): 168 records |
| `balkan-sl` | Balkan MO Shortlist | 474 | 297 | 0 | Z2 297 | permission request | permission balkan-mo (P1): 297 records |
| `baltic-way` | Baltic Way | 740 | 710 | 0 | Z2 710 | permission request | permission baltic-way (P1): 710 records |
| `baltic-way-sl` | Baltic Way Shortlist | 0 | 0 | 0 | no records | permission request | permission baltic-way (P1): 0 records |
| `bamo` | Bay Area Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission bamo (P3): 0 records |
| `bd-bdmo` | Bangladesh Mathematical Olympiad | 58 | 58 | 0 | Z2 58 | permission request | permission bd-mo (P2): 58 records |
| `be-jwo` | Flemish Junior Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission vwo (P1): 0 records |
| `be-omb` | Belgian Mathematical Olympiad (francophone) | 0 | 0 | 0 | no records | permission request | permission sbpm (P3): 0 records |
| `be-vwo` | Flemish Mathematical Olympiad | 164 | 161 | 0 | Z2 161 | permission request | permission vwo (P1): 161 records |
| `benelux` | Benelux Mathematical Olympiad | 72 | 67 | 0 | Z2 67 | permission request | permission nwo (P1): 67 records |
| `bf-mo` | Burkina Faso national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission cmathburkina (P3): 0 records |
| `bg-autumn` | Bulgarian Autumn Mathematical Tournament | 0 | 0 | 0 | no records | permission request | permission bg-union (P1): 0 records |
| `bg-egmo-tst` | Bulgarian EGMO Team Selection Test | 0 | 0 | 0 | no records | permission request | permission bg-union (P1): 0 records |
| `bg-hrabar` | Chernorizets Hrabar Mathematics Tournament | 0 | 0 | 0 | no records | permission request | permission bg-hrabar (P3): 0 records |
| `bg-ifym` | International Festival of Young Mathematicians (Sozopol) | 0 | 0 | 0 | no records | permission request | permission bg-ifym (P3): 0 records |
| `bg-jbmo-tst` | Bulgarian JBMO Team Selection Test | 9 | 9 | 0 | Z2 9 | permission request | permission bg-union (P1): 9 records |
| `bg-mo` | Bulgarian Mathematical Olympiad | 384 | 315 | 0 | Z2 315 | permission request | permission bg-union (P1): 315 records |
| `bg-mo-municipal` | Bulgarian Mathematical Olympiad, municipal round | 0 | 0 | 0 | no records | permission request | permission bg-union (P1): 0 records |
| `bg-mo-regional` | Bulgarian Mathematical Olympiad, regional round | 0 | 0 | 0 | no records | permission request | permission bg-union (P1): 0 records |
| `bg-salabashev` | Ivan Salabashev Mathematics Competition | 0 | 0 | 0 | no records | permission request | permission bg-salabashev (P3): 0 records |
| `bg-spring` | Bulgarian Spring Mathematical Competition | 0 | 0 | 0 | no records | permission request | permission bg-union (P1): 0 records |
| `bg-tst` | Bulgarian IMO and BMO Team Selection Test | 0 | 0 | 0 | no records | permission request | permission bg-union (P1): 0 records |
| `bg-winter` | Bulgarian Winter Mathematical Competition | 0 | 0 | 0 | no records | permission request | permission bg-union (P1): 0 records |
| `bh-mo` | Bahrain national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission bh-mo (P3): 0 records |
| `bmc-monthly` | Berkeley Math Circle Monthly Contest | 0 | 0 | 0 | no records | permission request | permission bmc (P3): 0 records |
| `bmmt` | Berkeley mini Math Tournament | 0 | 0 | 0 | no records | permission request | permission bmt (P1): 0 records |
| `bmt` | Berkeley Math Tournament | 1108 | 943 | 0 | Z2 943 | permission request | permission bmt (P1): 943 records |
| `bn-mo` | Brunei national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission bn-mo (P3): 0 records |
| `bo-conosur-tst` | Bolivian Cono Sur Team Selection Test | 0 | 0 | 0 | no records | permission request | permission bo-conosur-tst (P3): 0 records |
| `bo-ibero-tst` | Bolivian Iberoamerican Team Selection Test | 0 | 0 | 0 | no records | permission request | permission bo-ibero-tst (P3): 0 records |
| `bo-tst` | Bolivian IMO Team Selection Test | 0 | 0 | 0 | no records | permission request | permission bo-tst (P3): 0 records |
| `br-conosur-tst` | Brazilian Cono Sur Team Selection Test | 0 | 0 | 0 | no records | permission request | permission obm (P1): 0 records |
| `br-egmo-tst` | Brazilian EGMO Team Selection Test | 0 | 0 | 0 | no records | permission request | permission obm (P1): 0 records |
| `br-obm` | Brazilian Mathematical Olympiad | 282 | 278 | 0 | Z2 278 | permission request | permission obm (P1): 278 records |
| `br-obm-n1` | Brazilian Mathematical Olympiad, level 1 | 0 | 0 | 0 | no records | permission request | permission obm (P1): 0 records |
| `br-obm-n2` | Brazilian Mathematical Olympiad, level 2 | 0 | 0 | 0 | no records | permission request | permission obm (P1): 0 records |
| `br-obmep` | Brazilian Public Schools Mathematics Olympiad | 0 | 0 | 0 | no records | permission request | permission obmep (P3): 0 records |
| `br-rj-mo` | Rio de Janeiro Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission br-rj-mo (P3): 0 records |
| `br-tm2` | Girls in Mathematics Tournament | 0 | 0 | 0 | no records | permission request | permission tm2 (P3): 0 records |
| `br-tst` | Brazilian IMO Team Selection Test | 0 | 0 | 0 | no records | permission request | permission obm (P1): 0 records |
| `bw-mo` | Botswana national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission bw-mo (P3): 0 records |
| `by-iran-friendly` | Belarus-Iran Friendly Competition | 0 | 0 | 0 | no records | permission request | permission by-mo (P2): 0 records |
| `by-mo` | Belarus Mathematical Olympiad | 96 | 96 | 0 | Z2 96 | permission request | permission by-mo (P2): 96 records |
| `by-mo-regional` | Belarus Mathematical Olympiad, regional stage | 0 | 0 | 0 | no records | permission request | permission by-mo (P2): 0 records |
| `by-tst` | Belarus IMO Team Selection Test | 0 | 0 | 0 | no records | permission request | permission by-mo (P2): 0 records |
| `ca-ahsmc` | Alberta High School Mathematics Competition | 0 | 0 | 0 | no records | permission request | permission ca-ahsmc (P3): 0 records |
| `ca-cayley` | Cayley Mathematics Contest | 0 | 0 | 0 | no records | permission request | permission cemc (P1): 0 records |
| `ca-cimc` | Canadian Intermediate Mathematics Contest | 0 | 0 | 0 | no records | permission request | permission cemc (P1): 0 records |
| `ca-cjmo` | Canadian Junior Mathematical Olympiad | 35 | 6 | 0 | Z2 6 | permission request | permission cms-canada (P0): 6 records |
| `ca-cmo` | Canadian Mathematical Olympiad | 323 | 318 | 0 | Z2 318 | permission request | permission cms-canada (P0): 318 records |
| `ca-cmoqr` | Canadian Mathematical Olympiad Qualifying Repêchage | 145 | 145 | 0 | Z2 40 / Z3 105 | permission request | permission cms-canada (P0): 145 records |
| `ca-comc` | Canadian Open Mathematics Challenge | 0 | 0 | 0 | no records | permission request | permission cms-canada (P0): 0 records |
| `ca-csmc` | Canadian Senior Mathematics Contest | 0 | 0 | 0 | no records | permission request | permission cemc (P1): 0 records |
| `ca-csmo` | Canadian Students Math Olympiad | 0 | 0 | 0 | no records | permission request | permission ca-csmo (P3): 0 records |
| `ca-ctmc` | Canadian Team Mathematics Contest | 0 | 0 | 0 | no records | permission request | permission cemc (P1): 0 records |
| `ca-euclid` | Euclid Mathematics Contest | 120 | 110 | 0 | Z3 110 | permission request | permission cemc (P1): 110 records |
| `ca-fermat` | Fermat Mathematics Contest | 0 | 0 | 0 | no records | permission request | permission cemc (P1): 0 records |
| `ca-fryer` | Fryer Mathematics Contest | 0 | 0 | 0 | no records | permission request | permission cemc (P1): 0 records |
| `ca-galois` | Galois Mathematics Contest | 0 | 0 | 0 | no records | permission request | permission cemc (P1): 0 records |
| `ca-gauss` | Gauss Mathematics Contests | 0 | 0 | 0 | no records | permission request | permission cemc (P1): 0 records |
| `ca-hypatia` | Hypatia Mathematics Contest | 0 | 0 | 0 | no records | permission request | permission cemc (P1): 0 records |
| `ca-pascal` | Pascal Mathematics Contest | 0 | 0 | 0 | no records | permission request | permission cemc (P1): 0 records |
| `caps` | Czech-Austrian-Polish-Slovak Match | 186 | 149 | 0 | Z2 149 | permission request | permission caps (P2): 149 records |
| `caucasus` | Caucasus Mathematical Olympiad | 5 | 5 | 0 | Z2 5 | permission request | permission caucasus (P3): 5 records |
| `cca-bonanza` | CCA Math Bonanza | 0 | 0 | 0 | no records | permission request | permission cca-bonanza (P3): 0 records |
| `centro` | Centroamerican and Caribbean Mathematical Olympiad | 168 | 133 | 0 | Z2 133 | permission request | permission centro (P2): 133 records |
| `ch-smo` | Swiss Mathematical Olympiad | 42 | 42 | 0 | Z2 42 | permission request | permission imosuisse (P3): 42 records |
| `ch-smo-r1` | Swiss Mathematical Olympiad, First Round | 0 | 0 | 0 | no records | permission request | permission imosuisse (P3): 0 records |
| `ch-smo-r2` | Swiss Mathematical Olympiad, Second Round | 0 | 0 | 0 | no records | permission request | permission imosuisse (P3): 0 records |
| `ch-tst` | Swiss IMO Selection | 0 | 0 | 0 | no records | permission request | permission imosuisse (P3): 0 records |
| `chmmc` | Caltech Harvey Mudd Math Competition | 0 | 0 | 0 | no records | permission request | permission chmmc (P3): 0 records |
| `ci-mo` | Côte d'Ivoire national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission ci-mo (P3): 0 records |
| `ciim` | Iberoamerican Interuniversity Mathematics Competition | 108 | 92 | 0 | Z2 92 | permission request | permission ciim (P2): 92 records |
| `cl-ibero-tst` | Chilean Iberoamerican Team Selection Test | 0 | 0 | 0 | no records | permission request | permission cl-mo (P3): 0 records |
| `cl-junior` | Chilean Junior Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission cl-mo (P3): 0 records |
| `cl-mo` | Chile national mathematics olympiad | 22 | 22 | 0 | Z2 22 | permission request | permission cl-mo (P3): 22 records |
| `cl-qualifier` | Chilean Mathematical Olympiad, qualifying round | 0 | 0 | 0 | no records | permission request | permission cl-mo (P3): 0 records |
| `cl-qualifier-junior` | Chilean Junior Mathematical Olympiad, qualifying round | 0 | 0 | 0 | no records | permission request | permission cl-mo (P3): 0 records |
| `cl-tst` | Chilean IMO Team Selection Test | 0 | 0 | 0 | no records | permission request | permission cl-mo (P3): 0 records |
| `cm-mo` | Cameroon national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission cm-mo (P3): 0 records |
| `cmimc` | Carnegie Mellon Informatics and Mathematics Competition | 0 | 0 | 0 | no records | permission request | permission cmimc (P3): 0 records |
| `cmwmc` | Carnegie Mellon Winter Mathematics Competition | 0 | 0 | 0 | no records | permission request | permission cmimc (P3): 0 records |
| `cn-beijing-hs` | Beijing High School Mathematics Competition | 0 | 0 | 0 | no records | permission request | permission cn-beijing-hs (P3): 0 records |
| `cn-centennial` | Centennial Schools Mathematics Competition | 0 | 0 | 0 | no records | permission request | permission cn-centennial (P3): 0 records |
| `cn-cmc` | Chinese Mathematics Competitions | 0 | 0 | 0 | no records | permission request | permission cms-china (P1): 0 records |
| `cn-gmo` | China Girls' Mathematical Olympiad | 200 | 167 | 0 | Z2 167 | permission request | permission cms-china (P1): 167 records |
| `cn-hope` | Hope Cup National Mathematics Invitational | 0 | 0 | 0 | no records | permission request | permission cn-hope (P3): 0 records |
| `cn-hope-star` | Northern Hope Star Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission cn-hope-star (P3): 0 records |
| `cn-hua` | Hua Luogeng Cup Junior Mathematics Invitational | 0 | 0 | 0 | no records | permission request | permission hua-cup (P3): 0 records |
| `cn-junior-league` | China National Junior High School Mathematics League | 0 | 0 | 0 | no records | permission request | permission cms-china (P1): 0 records |
| `cn-league` | China National High School Mathematics League | 82 | 82 | 0 | Z2 82 | permission request | permission cms-china (P1): 82 records |
| `cn-league-prelim` | China High School Mathematics League provincial preliminaries | 0 | 0 | 0 | no records | permission request | permission cms-china (P1): 0 records |
| `cn-mo` | Chinese Mathematical Olympiad | 246 | 227 | 0 | Z2 227 | permission request | permission cms-china (P1): 227 records |
| `cn-northern` | China Northern Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission cn-northern (P3): 0 records |
| `cn-pmo-primary` | China Primary School Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission cn-pmo-primary (P3): 0 records |
| `cn-shanghai-hs` | Shanghai High School Mathematics Competition | 0 | 0 | 0 | no records | permission request | permission cn-shanghai-hs (P3): 0 records |
| `cn-smo` | China Southeast Mathematical Olympiad | 176 | 119 | 0 | Z2 119 | permission request | permission cms-china (P1): 119 records |
| `cn-tst` | China Team Selection Test | 216 | 215 | 0 | Z2 215 | permission request | permission cms-china (P1): 215 records |
| `cn-wmo` | China Western Mathematical Olympiad | 208 | 134 | 0 | Z2 134 | permission request | permission cms-china (P1): 134 records |
| `cn-xmo` | Xueersi Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission cn-xmo (P3): 0 records |
| `cn-yingchun` | Beijing Yingchun Cup Mathematics Competition | 0 | 0 | 0 | no records | permission request | permission cn-yingchun (P3): 0 records |
| `cn-yuanfudao` | Yuanfudao Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission cn-yuanfudao (P3): 0 records |
| `cn-zhonghuan` | Zhonghuan Cup Mathematics Competition | 0 | 0 | 0 | no records | permission request | permission cn-zhonghuan (P3): 0 records |
| `cn-zoumei` | Zoumei Cup Mathematics Competition | 0 | 0 | 0 | no records | permission request | permission cn-zoumei (P3): 0 records |
| `co-junior` | Colombian Junior Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission co-mo (P3): 0 records |
| `co-mo` | Colombia national mathematics olympiad | 3 | 3 | 0 | Z2 3 | permission request | permission co-mo (P3): 3 records |
| `co-tst` | Colombian Team Selection Test | 0 | 0 | 0 | no records | permission request | permission co-mo (P3): 0 records |
| `cono-sur` | Cono Sur Mathematical Olympiad | 228 | 186 | 0 | Z2 186 | permission request | permission cono-sur (P2): 186 records |
| `cps-junior` | Czech-Polish-Slovak Junior Match | 0 | 0 | 0 | no records | permission request | permission caps (P2): 0 records |
| `cr-mo` | Costa Rica national mathematics olympiad | 57 | 57 | 0 | Z2 57 | permission request | permission cr-mo (P2): 57 records |
| `cr-tst-oim` | Costa Rica Iberoamerican Team Selection Test | 0 | 0 | 0 | no records | permission request | permission cr-mo (P2): 0 records |
| `cu-mo` | Cuba national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission cu-mo (P3): 0 records |
| `cy-jbmo-tst` | Cyprus JBMO Team Selection Test | 0 | 0 | 0 | no records | permission request | permission cy-mo (P3): 0 records |
| `cy-mo` | Cyprus Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission cy-mo (P3): 0 records |
| `cy-tst` | Cyprus Team Selection Test | 0 | 0 | 0 | no records | permission request | permission cy-mo (P3): 0 records |
| `cz-pythagoriada` | Pythagoriáda | 0 | 0 | 0 | no records | permission request | permission pythagoriada (P3): 0 records |
| `cz-sk-mo` | Czech-Slovak Mathematical Olympiad | 438 | 257 | 0 | Z2 257 | permission request | permission cz-sk-mo (P2): 257 records |
| `cz-sk-mo-r1` | Czech-Slovak Mathematical Olympiad, First Round | 0 | 0 | 0 | no records | permission request | permission cz-sk-mo (P2): 0 records |
| `cz-sk-mo-r2` | Czech-Slovak Mathematical Olympiad, Regional Round | 0 | 0 | 0 | no records | permission request | permission cz-sk-mo (P2): 0 records |
| `cz-sk-mo-z` | Czech-Slovak Mathematical Olympiad, Category Z | 0 | 0 | 0 | no records | permission request | permission cz-sk-mo (P2): 0 records |
| `danube` | Danube Mathematical Competition | 24 | 24 | 0 | Z2 24 | permission request | permission danube (P3): 24 records |
| `de-bundeswettbewerb` | Bundeswettbewerb Mathematik | 456 | 215 | 0 | Z2 215 | permission request | permission bildung-begabung (P1): 215 records |
| `de-lwm-bw` | Landeswettbewerb Mathematik Baden-Württemberg | 0 | 0 | 0 | no records | permission request | permission lwm-bw (P3): 0 records |
| `de-lwm-by` | Landeswettbewerb Mathematik Bayern | 0 | 0 | 0 | no records | permission request | permission lwm-by (P3): 0 records |
| `de-mo` | German Mathematical Olympiad | 396 | 161 | 0 | Z2 161 | permission request | permission mo-verein (P1): 161 records |
| `de-mo-r1` | German Mathematical Olympiad, Round 1 | 0 | 0 | 0 | no records | permission request | permission mo-verein (P1): 0 records |
| `de-mo-r2` | German Mathematical Olympiad, Round 2 | 0 | 0 | 0 | no records | permission request | permission mo-verein (P1): 0 records |
| `de-mo-r3` | German Mathematical Olympiad, Round 3 | 0 | 0 | 0 | no records | permission request | permission mo-verein (P1): 0 records |
| `de-mo-r4` | German Mathematical Olympiad, Federal Round (lower grades) | 0 | 0 | 0 | no records | permission request | permission mo-verein (P1): 0 records |
| `de-mw-he` | Mathematik-Wettbewerb des Landes Hessen | 0 | 0 | 0 | no records | permission request | permission mw-hessen (P2): 0 records |
| `de-qedmo` | QEDMO | 0 | 0 | 0 | no records | permission request | permission qedmo (P3): 0 records |
| `de-tst` | German IMO Selection | 138 | 84 | 0 | Z2 84 | permission request | permission bildung-begabung (P1): 84 records |
| `dk-georgmohr` | Georg Mohr Contest | 180 | 180 | 0 | Z2 180 | permission request | permission georgmohr (P1): 180 records |
| `dk-georgmohr-r1` | Georg Mohr Contest, First Round | 0 | 0 | 0 | no records | permission request | permission georgmohr (P1): 0 records |
| `dmm` | Duke Math Meet | 0 | 0 | 0 | no records | permission request | permission dmm (P3): 0 records |
| `duel` | Mathematical Duel | 0 | 0 | 0 | no records | permission request | permission duel (P3): 0 records |
| `dz-mo` | Algeria national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission dz-mo (P3): 0 records |
| `eamo` | East African Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission eamo (P3): 0 records |
| `ec-junior` | Ecuadorian Junior Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission omec (P3): 0 records |
| `ec-mo` | Ecuadorian Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission omec (P3): 0 records |
| `ec-sedem` | SEdeM Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission sedem (P3): 0 records |
| `ee-mo` | Estonian Mathematical Olympiad | 22 | 22 | 0 | Z2 22 | permission request | permission ut-olympiads (P3): 22 records |
| `ee-mo-reg` | Estonian Mathematical Olympiad, Regional Round | 0 | 0 | 0 | no records | permission request | permission ut-olympiads (P3): 0 records |
| `ee-open` | Estonian Open Mathematics Contest | 0 | 0 | 0 | no records | permission request | permission ut-olympiads (P3): 0 records |
| `ee-tst` | Estonian IMO Team Selection Contest | 0 | 0 | 0 | no records | permission request | permission ut-olympiads (P3): 0 records |
| `eg-mo` | Egypt national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission eg-mo (P3): 0 records |
| `egmo` | European Girls' Mathematical Olympiad | 90 | 90 | 0 | Z2 90 | permission request | permission egmo (P2): 90 records |
| `elmo` | ELMO | 168 | 115 | 0 | Z2 115 | permission request | permission elmo (P2): 115 records |
| `elmo-sl` | ELMO Shortlist | 159 | 159 | 0 | Z2 159 | permission request | permission elmo (P2): 159 records |
| `emcc` | Exeter Math Club Competition | 0 | 0 | 0 | no records | permission request | permission emcc (P3): 0 records |
| `emic` | Elementary Mathematics International Contest | 0 | 0 | 0 | no records | permission request | permission imc-emic (P3): 0 records |
| `es-bcntech` | BarcelonaTech Mathcontest | 0 | 0 | 0 | no records | permission request | permission upc (P3): 0 records |
| `es-fespm` | FESPM National Mathematical Olympiad (2º ESO) | 0 | 0 | 0 | no records | permission request | permission fespm (P3): 0 records |
| `es-ome` | Spanish Mathematical Olympiad | 404 | 329 | 0 | Z2 329 | permission request | permission rsme (P1): 329 records |
| `es-ome-local` | Spanish Mathematical Olympiad, Local Phase | 0 | 0 | 0 | no records | permission request | permission rsme (P1): 0 records |
| `et-mo` | Ethiopia national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission et-mo (P3): 0 records |
| `fi-mo` | Finnish national mathematics olympiad | 120 | 111 | 0 | Z2 111 | permission request | permission fi-mo (P2): 111 records |
| `fi-mo-r1` | Finnish Upper Secondary School Mathematics Competition, First Round | 0 | 0 | 0 | no records | permission request | permission fi-mo (P2): 0 records |
| `fi-peruskoulu` | Finnish Comprehensive School Mathematics Competition | 0 | 0 | 0 | no records | permission request | permission fi-mo (P2): 0 records |
| `fr-academiques` | Olympiades académiques de mathématiques | 0 | 0 | 0 | no records | permission request | permission fr-education (P2): 0 records |
| `fr-cg` | Concours général des lycées, mathématiques | 0 | 0 | 0 | no records | permission request | permission fr-education (P2): 0 records |
| `fr-coupe-animath` | Coupe Animath | 0 | 0 | 0 | no records | permission request | permission animath (P1): 0 records |
| `fr-tfjm` | Tournoi Français des Jeunes Mathématiciennes et Mathématiciens | 0 | 0 | 0 | no records | permission request | permission animath (P1): 0 records |
| `fr-tst` | French Olympiad Training and Selection | 209 | 195 | 0 | Z2 195 | permission request | permission animath (P1): 195 records |
| `francophone` | Olympiade Francophone de Mathématiques | 56 | 28 | 0 | Z2 28 | permission request | permission francophone (P3): 28 records |
| `gaic-math` | GAIC Math (MathOdyssey) | 148 | 148 | 148 | Z1 | already Z1 |  |
| `ge-euler` | Euler Olympiad (Georgia) | 0 | 0 | 0 | no records | permission request | permission ge-mo (P3): 0 records |
| `ge-mo` | Georgia national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission ge-mo (P3): 0 records |
| `ge-tst` | Georgia Team Selection Test | 0 | 0 | 0 | no records | permission request | permission ge-mo (P3): 0 records |
| `gh-mo` | Ghana national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission gh-mo (P3): 0 records |
| `glmt` | Girls' Lexington Math Tournament | 0 | 0 | 0 | no records | permission request | permission lhsmath (P3): 0 records |
| `gqmo` | Global Quarantine Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission gqmo (P3): 0 records |
| `gr-euclid` | Euclid Competition (Greece) | 0 | 0 | 0 | no records | permission request | permission hms (P3): 0 records |
| `gr-hms` | Greek Mathematical Olympiad | 20 | 20 | 0 | Z2 20 | permission request | permission hms (P3): 20 records |
| `gr-small-euclid` | Small Euclid Competition | 0 | 0 | 0 | no records | permission request | permission hms (P3): 0 records |
| `gr-thales` | Thales Competition | 0 | 0 | 0 | no records | permission request | permission hms (P3): 0 records |
| `gr-tst` | Greek Team Selection Examination | 0 | 0 | 0 | no records | permission request | permission hms (P3): 0 records |
| `gulf` | Gulf Mathematical Olympiad | 28 | 28 | 0 | Z2 28 | permission request | permission gulf (P3): 28 records |
| `harker` | Harker Math Invitational | 0 | 0 | 0 | no records | permission request | permission harker (P3): 0 records |
| `harvest` | Harvest Math Invitational | 0 | 0 | 0 | no records | permission request | permission harvest (P3): 0 records |
| `hk-chkmo` | Hong Kong (China) Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission hkmo (P1): 0 records |
| `hk-hkmo` | Hong Kong Mathematics Olympiad | 0 | 0 | 0 | no records | permission request | permission edb-hk (P3): 0 records |
| `hk-pc` | Hong Kong Preliminary Selection Contest and TST | 13 | 13 | 0 | Z2 13 | permission request | permission hkmo (P1): 13 records |
| `hmic` | HMMT Invitational Competition | 70 | 65 | 0 | Z2 65 | permission request | permission hmmt (P0): 65 records |
| `hmmt` | Harvard-MIT Mathematics Tournament | 2546 | 2338 | 0 | Z2 2338 | permission request | permission hmmt (P0): 2338 records |
| `hmnt` | HMMT November | 1209 | 1063 | 0 | Z2 1063 | permission request | permission hmmt (P0): 1063 records |
| `hn-mo` | Honduran Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission hn-mo (P3): 0 records |
| `hr-city` | Croatian School and City Mathematics Competition | 0 | 0 | 0 | no records | permission request | permission hr-mo (P3): 0 records |
| `hr-county` | Croatian County Mathematics Competition | 0 | 0 | 0 | no records | permission request | permission hr-mo (P3): 0 records |
| `hr-girls` | Croatian Mathematical Olympiad for Girls | 0 | 0 | 0 | no records | permission request | permission hr-mo (P3): 0 records |
| `hr-jmo` | Croatian Junior Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission hr-mo (P3): 0 records |
| `hr-mo` | Croatia national mathematics olympiad | 1 | 1 | 0 | Z2 1 | permission request | permission hr-mo (P3): 1 records |
| `hr-state` | Croatian State Mathematics Competition | 0 | 0 | 0 | no records | permission request | permission hr-mo (P3): 0 records |
| `hr-tst` | Croatian Team Selection Test | 0 | 0 | 0 | no records | permission request | permission hr-mo (P3): 0 records |
| `hu-arany` | Arany Dániel Mathematics Competition | 0 | 0 | 0 | no records | permission request | permission bolyai (P1): 0 records |
| `hu-durer` | Dürer Mathematics Competition | 0 | 0 | 0 | no records | permission request | permission durer (P3): 0 records |
| `hu-komal` | KöMaL Problem Contests | 3961 | 3961 | 0 | Z2 3961 | public domain 1894-1930 (candidate) | public domain 1894-1930 (PD-US-1931 + PD-LIFE/PD-ANON; US side certain; each problem names its proposer, so the death year of each is needed): 0 records; permission komal (P0): 3961 records |
| `hu-oktv` | Hungarian National Secondary School Competition | 132 | 132 | 0 | Z2 132 | permission request | permission oktatasi-hivatal (P2): 132 records |
| `hu-zrinyi` | Zrínyi Ilona Mathematics Competition | 0 | 0 | 0 | no records | permission request | permission zrinyi (P3): 0 records |
| `hungary-israel` | Hungary-Israel Binational Mathematical Competition | 0 | 0 | 0 | no records | permission request | permission hungary-israel (P3): 0 records |
| `ibero` | Iberoamerican Mathematical Olympiad | 252 | 143 | 0 | Z2 143 | permission request | permission ibero (P2): 143 records |
| `id-bmoc` | BMOC | 0 | 0 | 0 | no records | permission request | permission id-bmoc (P3): 0 records |
| `id-fimnas` | FIMNas | 0 | 0 | 0 | no records | permission request | permission id-fimnas (P3): 0 records |
| `id-fsn` | FSN | 0 | 0 | 0 | no records | permission request | permission id-fsn (P3): 0 records |
| `id-icef` | ICEF | 0 | 0 | 0 | no records | permission request | permission id-icef (P3): 0 records |
| `id-itbmo` | ITB Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission id-itbmo (P3): 0 records |
| `id-kmsi` | KMSI | 0 | 0 | 0 | no records | permission request | permission id-kmsi (P3): 0 records |
| `id-ksm-ma` | Madrasah Science Competition, Mathematics for MA | 0 | 0 | 0 | no records | permission request | permission id-ksm-ma (P3): 0 records |
| `id-lmnas` | LMNas | 0 | 0 | 0 | no records | permission request | permission id-lmnas (P3): 0 records |
| `id-namo` | NaMO | 0 | 0 | 0 | no records | permission request | permission id-namo (P3): 0 records |
| `id-omits` | OMITS | 0 | 0 | 0 | no records | permission request | permission id-omits (P3): 0 records |
| `id-omvn` | OMVN | 0 | 0 | 0 | no records | permission request | permission id-omvn (P3): 0 records |
| `id-opsilon` | OPSILON | 0 | 0 | 0 | no records | permission request | permission id-opsilon (P3): 0 records |
| `id-osk-sd` | OSN SD District Stage | 0 | 0 | 0 | no records | permission request | permission id-osn (P2): 0 records |
| `id-osk-sma` | OSN SMA District Stage | 0 | 0 | 0 | no records | permission request | permission id-osn (P2): 0 records |
| `id-osk-smp` | OSN SMP District Stage | 0 | 0 | 0 | no records | permission request | permission id-osn (P2): 0 records |
| `id-osn` | Indonesian National Science Olympiad | 192 | 152 | 0 | Z2 152 | permission request | permission id-osn (P2): 152 records |
| `id-osn-sd` | OSN SD National Stage | 0 | 0 | 0 | no records | permission request | permission id-osn (P2): 0 records |
| `id-osn-smp` | OSN SMP National Stage | 0 | 0 | 0 | no records | permission request | permission id-osn (P2): 0 records |
| `id-osp-sd` | OSN SD Province Stage | 0 | 0 | 0 | no records | permission request | permission id-osn (P2): 0 records |
| `id-osp-sma` | OSN SMA Province Stage | 0 | 0 | 0 | no records | permission request | permission id-osn (P2): 0 records |
| `id-osp-smp` | OSN SMP Province Stage | 0 | 0 | 0 | no records | permission request | permission id-osn (P2): 0 records |
| `id-posi` | POSI | 0 | 0 | 0 | no records | permission request | permission id-posi (P3): 0 records |
| `id-sce` | SCE | 0 | 0 | 0 | no records | permission request | permission id-sce (P3): 0 records |
| `id-science-expo` | Science EXPO SUD | 0 | 0 | 0 | no records | permission request | permission id-science-expo (P3): 0 records |
| `id-soc` | SOC | 0 | 0 | 0 | no records | permission request | permission id-soc (P3): 0 records |
| `id-tos` | TOS | 0 | 0 | 0 | no records | permission request | permission id-tos (P3): 0 records |
| `id-tst` | Indonesia Team Selection Test | 0 | 0 | 0 | no records | permission request | permission id-osn (P2): 0 records |
| `id-umc` | UMC | 0 | 0 | 0 | no records | permission request | permission id-umc (P3): 0 records |
| `ie-irmo` | Irish Mathematical Olympiad | 395 | 395 | 0 | Z2 395 | permission request | permission irmo (P1): 395 records |
| `ie-prism` | PRISM Problem Solving for Irish Second level Mathematicians | 0 | 0 | 0 | no records | permission request | permission prism (P3): 0 records |
| `igo` | Iranian Geometry Olympiad | 190 | 99 | 0 | Z2 99 | permission request | permission igo (P2): 99 records |
| `il-gillis` | Israel National Olympiad | 118 | 118 | 0 | Z2 118 | permission request | permission il-gillis (P1): 118 records |
| `il-grossman` | Grossman Olympiad | 19 | 19 | 0 | Z2 19 | permission request | permission il-grossman (P3): 19 records |
| `il-oral` | Israel Oral Olympiad | 0 | 0 | 0 | no records | permission request | permission il-oral (P3): 0 records |
| `il-revenge` | Israel Olympic Revenge | 0 | 0 | 0 | no records | permission request | permission il-revenge (P3): 0 records |
| `ill` | IMO Longlist | 1311 | 1311 | 0 | Z2 1311 | permission request | permission imo-board (P0): 1311 records |
| `imac` | International Mathematical Arhimede Contest | 19 | 19 | 0 | Z2 19 | permission request | permission imac (P3): 19 records |
| `imas` | International Mathematics Assessments for Schools | 0 | 0 | 0 | no records | permission request | permission chiuchang (P3): 0 records |
| `imc` | International Mathematics Competition for University Students | 354 | 354 | 0 | Z2 354 | permission request | permission imc (P1): 354 records |
| `imo` | International Mathematical Olympiad | 410 | 403 | 0 | Z2 403 | permission request | permission imo-board (P0): 403 records |
| `imts` | International Mathematical Talent Search | 0 | 0 | 0 | no records | permission request | permission imts (P3): 0 records |
| `in-assam` | Assam Mathematics Olympiad | 0 | 0 | 0 | no records | permission request | permission aam (P3): 0 records |
| `in-egmo-tst` | India EGMO Team Selection Test | 0 | 0 | 0 | no records | permission request | permission hbcse (P1): 0 records |
| `in-inmo` | Indian National Mathematical Olympiad | 246 | 242 | 0 | Z2 242 | permission request | permission hbcse (P1): 242 records |
| `in-kvjmo` | Kendriya Vidyalaya Junior Mathematics Olympiad | 0 | 0 | 0 | no records | permission request | permission kvs (P3): 0 records |
| `in-limit` | LIMIT | 0 | 0 | 0 | no records | permission request | permission isi-bangalore-limit (P3): 0 records |
| `in-mtrp` | Mathematics Talent Reward Programme | 0 | 0 | 0 | no records | permission request | permission isi-kolkata (P3): 0 records |
| `in-nmtc` | National Mathematics Talent Contest | 0 | 0 | 0 | no records | permission request | permission amti (P3): 0 records |
| `in-prmo-ioqm` | PRMO and IOQM | 0 | 0 | 0 | no records | permission request | permission mtai (P3): 0 records |
| `in-rmo` | Indian Regional Mathematical Olympiad | 353 | 267 | 0 | Z2 267 | permission request | permission hbcse (P1): 267 records |
| `in-stems` | STEMS Mathematics | 0 | 0 | 0 | no records | permission request | permission cmi (P3): 0 records |
| `in-tst` | India Team Selection Test | 57 | 57 | 0 | Z2 57 | permission request | permission hbcse (P1): 57 records |
| `india-iran` | India-Iran Friendly Mathematics Competition | 0 | 0 | 0 | no records | permission request | permission india-iran (P3): 0 records |
| `iom` | International Olympiad of Metropolises | 66 | 35 | 0 | Z2 35 | permission request | permission iom (P3): 35 records |
| `iq-mo` | Iraq national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission iq-mo (P3): 0 records |
| `ir-combinatorics` | Iranian Combinatorics Olympiad | 0 | 0 | 0 | no records | permission request | permission ir-combinatorics (P3): 0 records |
| `ir-mo` | Iran Mathematical Olympiad | 119 | 119 | 0 | Z2 119 | permission request | permission ir-ysc (P1): 119 records |
| `ir-mo-r1` | Iran Mathematical Olympiad, first round | 0 | 0 | 0 | no records | permission request | permission ir-ysc (P1): 0 records |
| `ir-mo-r2` | Iran Mathematical Olympiad, second round | 258 | 84 | 0 | Z2 84 | permission request | permission ir-ysc (P1): 84 records |
| `ir-ourmo` | Iranian Our MO | 0 | 0 | 0 | no records | permission request | permission ir-ourmo (P3): 0 records |
| `ir-rmm-tst` | Iran RMM Team Selection Test | 0 | 0 | 0 | no records | permission request | permission ir-ysc (P1): 0 records |
| `ir-tst` | Iran Team Selection Test | 250 | 250 | 0 | Z2 250 | permission request | permission ir-ysc (P1): 250 records |
| `ir-university` | Iranian University Mathematics Olympiad | 0 | 0 | 0 | no records | permission request | permission ir-university (P3): 0 records |
| `iran-taiwan` | Iran-Taiwan Friendly Mathematics Competition | 0 | 0 | 0 | no records | permission request | permission iran-taiwan (P3): 0 records |
| `is-mo` | Icelandic national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission is-mo (P3): 0 records |
| `is-mo-pre` | Icelandic Mathematics Competition, Preliminary Round | 0 | 0 | 0 | no records | permission request | permission is-mo (P3): 0 records |
| `isl` | IMO Shortlist | 761 | 761 | 0 | Z2 761 | permission request | permission imo-board (P0): 761 records |
| `istmo` | Istmo Centroamericano | 0 | 0 | 0 | no records | permission request | permission istmo (P3): 0 records |
| `it-archimede` | Giochi di Archimede | 0 | 0 | 0 | no records | permission request | permission umi-olimpiadi (P1): 0 records |
| `it-cesenatico` | Italian Mathematical Olympiad | 246 | 243 | 0 | Z2 243 | permission request | permission umi-olimpiadi (P1): 243 records |
| `it-classi-prime` | Italian Competition for First-Year Students | 0 | 0 | 0 | no records | permission request | permission umi-olimpiadi (P1): 0 records |
| `it-febbraio` | Gara di Febbraio | 0 | 0 | 0 | no records | permission request | permission umi-olimpiadi (P1): 0 records |
| `it-oliforum` | Oliforum Contest | 0 | 0 | 0 | no records | permission request | permission oliforum (P3): 0 records |
| `it-squadre` | Italian Team Competition | 0 | 0 | 0 | no records | permission request | permission umi-olimpiadi (P1): 0 records |
| `itest` | iTest | 0 | 0 | 0 | no records | permission request | permission itest (P3): 0 records |
| `iwymic` | Invitational World Youth Mathematics Intercity Competition | 0 | 0 | 0 | no records | permission request | permission imc-emic (P3): 0 records |
| `jbmo` | Junior Balkan Mathematical Olympiad | 120 | 107 | 0 | Z2 107 | permission request | permission jbmo (P1): 107 records |
| `jbmo-sl` | JBMO Shortlist | 538 | 305 | 0 | Z2 305 | permission request | permission jbmo (P1): 305 records |
| `jhmmc` | Joe Holbrook Memorial Math Competition | 0 | 0 | 0 | no records | permission request | permission holbrook (P3): 0 records |
| `jhmt` | Johns Hopkins Math Tournament | 0 | 0 | 0 | no records | permission request | permission jhmt (P3): 0 records |
| `jo-mo` | Jordan national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission jo-mo (P3): 0 records |
| `journal-amm` | American Mathematical Monthly Problems | 0 | 0 | 0 | no records | public domain 1894-1930 | public domain 1894-1930 (PD-US-1931; certain: US work published before 1931): 0 records; permission maa (P0): 0 records |
| `journal-crux` | Crux Mathematicorum | 5179 | 5179 | 0 | Z3 5179 | permission request | permission cms-canada (P0): 5179 records |
| `journal-eureka` | Eureka! | 0 | 0 | 0 | no records | permission request | permission obm (P1): 0 records |
| `journal-excalibur` | Mathematical Excalibur | 0 | 0 | 0 | no records | permission request | permission excalibur (P2): 0 records |
| `journal-gazeta` | Gazeta Matematică | 0 | 0 | 0 | no records | public domain 1895-1930 (candidate) | public domain 1895-1930 (PD-US-1931 + PD-LIFE; US side certain; problems name their proposers, so the death year of each is needed): 0 records; permission ssmr (P1): 0 records |
| `journal-komal` | KöMaL | 0 | 0 | 0 | no records | public domain 1894-1930 (candidate) | public domain 1894-1930 (PD-US-1931 + PD-LIFE/PD-ANON; US side certain; each problem names its proposer, so the death year of each is needed): 0 records; permission komal (P0): 0 records |
| `journal-kvant` | Kvant Problem Section | 0 | 0 | 0 | no records | permission request | permission kvant (P2): 0 records |
| `journal-mr` | Mathematical Reflections | 696 | 696 | 0 | Z3 696 | permission request | permission awesomemath (P1): 696 records |
| `journal-parabola` | Parabola | 0 | 0 | 0 | no records | permission request | permission parabola (P2): 0 records |
| `journal-tzaloa` | Tzaloa | 0 | 0 | 0 | no records | permission request | permission omm (P1): 0 records |
| `jp-egmo-prelim` | EGMO Preliminary in Japan | 0 | 0 | 0 | no records | permission request | permission imojp (P1): 0 records |
| `jp-hironaka` | Hironaka Cup | 0 | 0 | 0 | no records | permission request | permission sansu-olympic (P3): 0 records |
| `jp-jhironaka` | Junior Hironaka Cup | 0 | 0 | 0 | no records | permission request | permission sansu-olympic (P3): 0 records |
| `jp-jjmo` | Japan Junior Mathematical Olympiad | 90 | 85 | 0 | Z2 26 / Z3 59 | permission request | permission imojp (P1): 85 records |
| `jp-jjmo-prelim` | Japan Junior Mathematical Olympiad Preliminary Round | 0 | 0 | 0 | no records | permission request | permission imojp (P1): 0 records |
| `jp-jmo` | Japan Mathematical Olympiad | 180 | 180 | 0 | Z2 169 / Z3 11 | permission request | permission imojp (P1): 180 records |
| `jp-jmo-prelim` | Japan Mathematical Olympiad Preliminary Round | 0 | 0 | 0 | no records | permission request | permission imojp (P1): 0 records |
| `jp-jsansu` | Junior Sansu Olympiad | 0 | 0 | 0 | no records | permission request | permission sansu-olympic (P3): 0 records |
| `jp-sansu` | Sansu Olympiad | 0 | 0 | 0 | no records | permission request | permission sansu-olympic (P3): 0 records |
| `jp-tst` | Japan IMO Team Selection Camp | 0 | 0 | 0 | no records | permission request | permission imojp (P1): 0 records |
| `kangaroo` | Mathematical Kangaroo | 0 | 0 | 0 | no records | permission request | permission kangaroo (P3): 0 records |
| `ke-mo` | Kenya Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission ke-mo (P3): 0 records |
| `kettering` | Kettering University High School Mathematics Olympiad | 0 | 0 | 0 | no records | permission request | permission kettering (P3): 0 records |
| `kg-mo` | Kyrgyzstan national mathematics olympiad | 30 | 30 | 0 | Z2 30 | permission request | permission kg-mo (P3): 30 records |
| `kg-regional` | Kyrgyzstan Regional Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission kg-mo (P3): 0 records |
| `kh-mo` | Cambodia national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission kh-mo (P3): 0 records |
| `kp-mo` | North Korea Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission kp-mo (P3): 0 records |
| `kp-tst` | North Korea Team Selection Test | 0 | 0 | 0 | no records | permission request | permission kp-mo (P3): 0 records |
| `kr-fkmo` | Final Korean Mathematical Olympiad | 180 | 123 | 0 | Z2 123 | permission request | permission kms (P1): 123 records |
| `kr-kjmo` | Korean Junior Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission kms (P1): 0 records |
| `kr-kjmo-r1` | Korean Junior Mathematical Olympiad First Round | 0 | 0 | 0 | no records | permission request | permission kms (P1): 0 records |
| `kr-kmo` | Korean Mathematical Olympiad | 208 | 147 | 0 | Z2 147 | permission request | permission kms (P1): 147 records |
| `kr-kmo-r1` | Korean Mathematical Olympiad First Round | 0 | 0 | 0 | no records | permission request | permission kms (P1): 0 records |
| `kr-uscm` | Korea University Students Contest of Mathematics | 0 | 0 | 0 | no records | permission request | permission kms (P1): 0 records |
| `kurschak` | Kürschák Competition | 399 | 222 | 0 | Z2 222 | public domain 1894-1930 (candidate) | public domain 1894-1930 (PD-US-1931 + PD-ANON; US side certain; Hungarian side needs the papers to be anonymous or the setters dead before 1956): 0 records; permission bolyai (P1): 222 records |
| `kw-mo` | Kuwait national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission kw-mo (P3): 0 records |
| `kz-almaty` | Almaty City Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission kz-mo (P1): 0 records |
| `kz-junior` | Kazakhstan Junior Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission kz-mo (P1): 0 records |
| `kz-mo` | Kazakhstan Mathematical Olympiad | 87 | 87 | 0 | Z2 87 | permission request | permission kz-mo (P1): 87 records |
| `kz-mo-district` | Kazakhstan Mathematical Olympiad, district stage | 0 | 0 | 0 | no records | permission request | permission kz-mo (P1): 0 records |
| `kz-mo-regional` | Kazakhstan Mathematical Olympiad, regional stage | 0 | 0 | 0 | no records | permission request | permission kz-mo (P1): 0 records |
| `kz-smagulov` | Smagulov Olympiad | 0 | 0 | 0 | no records | permission request | permission kz-smagulov (P3): 0 records |
| `la-mo` | Laos national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission la-mo (P3): 0 records |
| `lb-mo` | Lebanon national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission lb-mo (P3): 0 records |
| `li-mo` | Liechtenstein national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission li-mo (P3): 0 records |
| `lk-mo` | Sri Lanka Mathematics Olympiad | 0 | 0 | 0 | no records | permission request | permission lk-mo (P3): 0 records |
| `lk-slmc` | Sri Lanka Mathematics Challenge Competition | 0 | 0 | 0 | no records | permission request | permission lk-mo (P3): 0 records |
| `lmt` | Lexington Math Tournament | 0 | 0 | 0 | no records | permission request | permission lhsmath (P3): 0 records |
| `lt-gdl` | Grand Duchy of Lithuania Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission vu-mif (P2): 0 records |
| `lt-mo` | Lithuanian Mathematical Olympiad | 184 | 170 | 0 | Z2 170 | permission request | permission vu-mif (P2): 170 records |
| `lt-tst` | Lithuanian Team Selection Test | 0 | 0 | 0 | no records | permission request | permission vu-mif (P2): 0 records |
| `lt-vumif` | VU MIF Mathematics Olympiad | 0 | 0 | 0 | no records | permission request | permission vu-mif (P2): 0 records |
| `lu-mo` | Luxembourg national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission lu-mo (P3): 0 records |
| `lusophon` | Lusophon Mathematical Olympiad | 96 | 89 | 0 | Z2 89 | permission request | permission lusophon (P2): 89 records |
| `lv-amo` | Latvian Open Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission lv-mo (P3): 0 records |
| `lv-mo` | Latvian Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission lv-mo (P3): 0 records |
| `lv-tst` | Latvian Team Selection Test | 0 | 0 | 0 | no records | permission request | permission lv-mo (P3): 0 records |
| `ma-mmc` | Math&Maroc Competition | 0 | 0 | 0 | no records | permission request | permission mathmaroc (P3): 0 records |
| `ma-mo` | Morocco national mathematics olympiad | 4 | 4 | 0 | Z2 4 | permission request | permission ma-mo (P3): 4 records |
| `ma-tst` | Moroccan IMO Team Selection Test | 0 | 0 | 0 | no records | permission request | permission ma-mo (P3): 0 records |
| `manhattan-mo` | Manhattan Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission manhattan-mo (P3): 0 records |
| `math-hour` | Math Hour Olympiad | 0 | 0 | 0 | no records | permission request | permission mathhour-uw (P3): 0 records |
| `math-league` | Math League contests | 0 | 0 | 0 | no records | permission request | permission mathleague (P3): 0 records |
| `mathcounts` | MATHCOUNTS | 0 | 0 | 0 | no records | permission request | permission mathcounts (P3): 0 records |
| `mathlinks-contest` | MathLinks Contest | 0 | 0 | 0 | no records | permission request | permission mathlinks-contest (P3): 0 records |
| `may-olympiad` | May Olympiad | 0 | 0 | 0 | no records | permission request | permission oma (P2): 0 records |
| `mbmt` | Montgomery Blair Math Tournament | 0 | 0 | 0 | no records | permission request | permission mbmt (P3): 0 records |
| `mc-mo` | Monaco national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission mc-mo (P3): 0 records |
| `md-jbmo-tst` | Moldova JBMO Team Selection Test | 0 | 0 | 0 | no records | permission request | permission md-mo (P2): 0 records |
| `md-mo` | Moldova national mathematics olympiad | 51 | 51 | 0 | Z2 51 | permission request | permission md-mo (P2): 51 records |
| `me-mo` | Montenegro national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission me-mo (P3): 0 records |
| `memo` | Middle European Mathematical Olympiad | 240 | 197 | 0 | Z2 197 | permission request | permission memo (P2): 197 records |
| `mk-cane` | Aleksandar Blazhevski-Cane Memorial Competition | 0 | 0 | 0 | no records | permission request | permission smm-mk (P2): 0 records |
| `mk-jbmo-tst` | North Macedonia JBMO Team Selection Test | 0 | 0 | 0 | no records | permission request | permission smm-mk (P2): 0 records |
| `mk-jmo` | North Macedonia Junior Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission smm-mk (P2): 0 records |
| `mk-mo` | North Macedonia national mathematics olympiad | 144 | 128 | 0 | Z2 128 | permission request | permission smm-mk (P2): 128 records |
| `mk-primary` | North Macedonia State Mathematics Competition for Primary Schools | 0 | 0 | 0 | no records | permission request | permission smm-mk (P2): 0 records |
| `mk-regional` | North Macedonia Regional Mathematics Competition | 0 | 0 | 0 | no records | permission request | permission smm-mk (P2): 0 records |
| `mk-tst` | North Macedonia Team Selection Test | 0 | 0 | 0 | no records | permission request | permission smm-mk (P2): 0 records |
| `mm-mo` | Myanmar national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission mm-mo (P3): 0 records |
| `mmaths` | Math Majors of America Tournament for High Schools | 0 | 0 | 0 | no records | permission request | permission mmaths (P3): 0 records |
| `mn-mo` | Mongolian Mathematical Olympiad | 10 | 10 | 0 | Z2 10 | permission request | permission mn-mo (P1): 10 records |
| `mn-tst` | Mongolia Team Selection Test | 0 | 0 | 0 | no records | permission request | permission mn-mo (P1): 0 records |
| `mo-macau` | Macau Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission macau (P3): 0 records |
| `moaa` | Math Open At Andover | 0 | 0 | 0 | no records | permission request | permission moaa (P3): 0 records |
| `moems` | Math Olympiads for Elementary and Middle Schools | 0 | 0 | 0 | no records | permission request | permission moems (P3): 0 records |
| `mpfg` | Math Prize for Girls | 0 | 0 | 0 | no records | permission request | permission mathprize (P3): 0 records |
| `mpfg-olympiad` | Math Prize for Girls Olympiad | 0 | 0 | 0 | no records | permission request | permission mathprize (P3): 0 records |
| `mt-mo` | Malta national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission mt-mo (P3): 0 records |
| `mx-femenil` | Mexican Girls' Contest | 0 | 0 | 0 | no records | permission request | permission omm (P1): 0 records |
| `mx-omm` | Mexican Mathematical Olympiad | 244 | 231 | 0 | Z2 231 | permission request | permission omm (P1): 231 records |
| `mx-omm-state` | Mexican state mathematical olympiads | 0 | 0 | 0 | no records | permission request | permission omm (P1): 0 records |
| `mx-ommeb` | Mexican Mathematical Olympiad for Basic Education | 0 | 0 | 0 | no records | permission request | permission omm (P1): 0 records |
| `mx-ommu` | Mexican University Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission mx-ommu (P3): 0 records |
| `mx-quarantine` | Mexican Quarantine Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission mx-quarantine (P3): 0 records |
| `mx-regional-center` | Regional Mathematical Olympiad of the Center Zone of Mexico | 0 | 0 | 0 | no records | permission request | permission omm (P1): 0 records |
| `mx-regional-northeast` | Regional Mathematical Olympiad of Northeast Mexico | 0 | 0 | 0 | no records | permission request | permission omm (P1): 0 records |
| `mx-regional-northwest` | Regional Mathematical Olympiad of Northwest Mexico | 0 | 0 | 0 | no records | permission request | permission omm (P1): 0 records |
| `mx-regional-southeast` | Regional Mathematical Olympiad of Southeast Mexico | 0 | 0 | 0 | no records | permission request | permission omm (P1): 0 records |
| `mx-regional-west` | Regional Mathematical Olympiad of Western Mexico | 0 | 0 | 0 | no records | permission request | permission omm (P1): 0 records |
| `my-imonst1` | IMO National Selection Test 1 | 0 | 0 | 0 | no records | permission request | permission imo-malaysia (P3): 0 records |
| `my-imonst2` | IMO National Selection Test 2 | 0 | 0 | 0 | no records | permission request | permission imo-malaysia (P3): 0 records |
| `my-jom` | Junior Olympiad of Malaysia | 0 | 0 | 0 | no records | permission request | permission imo-malaysia (P3): 0 records |
| `my-omk` | Malaysian Mathematical Olympiad | 8 | 8 | 0 | Z2 8 | permission request | permission persama (P3): 8 records |
| `my-tst` | Malaysian IMO Team Selection Test | 0 | 0 | 0 | no records | permission request | permission imo-malaysia (P3): 0 records |
| `naboj` | Náboj | 0 | 0 | 0 | no records | permission request | permission naboj (P3): 0 records |
| `naboj-junior` | Náboj Junior | 0 | 0 | 0 | no records | permission request | permission naboj (P3): 0 records |
| `nemotron-imo-bench` | Nemotron IMO-Bench | 194 | 194 | 194 | Z1 | already Z1 |  |
| `ng-mo` | Nigeria national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission ng-mo (P3): 0 records |
| `nimo` | National Internet Math Olympiad | 0 | 0 | 0 | no records | permission request | permission nimo (P3): 0 records |
| `nimo-summer` | NIMO Summer Contest | 0 | 0 | 0 | no records | permission request | permission nimo (P3): 0 records |
| `nl-bxmo-tst` | Dutch BxMO Team Selection Test | 44 | 44 | 0 | Z2 44 | permission request | permission nwo (P1): 44 records |
| `nl-jwo` | Dutch Junior Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission nwo (P1): 0 records |
| `nl-nwo` | Dutch Mathematical Olympiad Final | 312 | 308 | 0 | Z2 308 | permission request | permission nwo (P1): 308 records |
| `nl-nwo-r1` | Dutch Mathematical Olympiad First Round | 0 | 0 | 0 | no records | permission request | permission nwo (P1): 0 records |
| `nl-nwo-r2` | Dutch Mathematical Olympiad Second Round | 0 | 0 | 0 | no records | permission request | permission nwo (P1): 0 records |
| `nl-tst` | Dutch IMO Team Selection Tests | 0 | 0 | 0 | no records | permission request | permission nwo (P1): 0 records |
| `no-abel` | Abel Competition | 136 | 136 | 0 | Z2 136 | permission request | permission abel (P2): 136 records |
| `no-abel-r1` | Abel Competition, First Round | 0 | 0 | 0 | no records | permission request | permission abel (P2): 0 records |
| `no-abel-r2` | Abel Competition, Second Round | 0 | 0 | 0 | no records | permission request | permission abel (P2): 0 records |
| `noetic` | Noetic Learning Math Contest | 0 | 0 | 0 | no records | permission request | permission noetic (P3): 0 records |
| `nordic` | Nordic Mathematical Contest | 160 | 160 | 0 | Z2 160 | permission request | permission georgmohr (P1): 160 records |
| `np-mo` | Nepal Mathematics Olympiad | 0 | 0 | 0 | no records | permission request | permission np-mo (P3): 0 records |
| `np-tst` | Nepal Team Selection Test | 0 | 0 | 0 | no records | permission request | permission np-mo (P3): 0 records |
| `nz-nzmo` | New Zealand Mathematical Olympiad | 55 | 55 | 0 | Z2 55 | open licence found | open licence of source nzmoc at https://www.mathsolympiad.org.nz/resources/: "All of the resources published by the NZMOC are covered by the CC BY 4.0 license" and this includes "past NZMO problems and solutions" (read 2026-11-16); re-source the records from nzmoc: 55 records |
| `oimu` | Iberoamerican Olympiad for University Students | 49 | 49 | 0 | Z2 49 | permission request | permission oimu (P3): 49 records |
| `olympic-revenge` | Olympic Revenge | 150 | 27 | 0 | Z2 27 | permission request | permission olympic-revenge (P3): 27 records |
| `om-mo` | Oman national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission om-mo (P3): 0 records |
| `ommc` | Online Monmouth Math Competition | 0 | 0 | 0 | no records | permission request | permission ommc (P3): 0 records |
| `omo` | Online Math Open | 0 | 0 | 0 | no records | permission request | permission evan-chen (P1): 0 records |
| `pa-mo` | Panamanian Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission opm-pa (P3): 0 records |
| `pagmo` | Pan-American Girls' Mathematical Olympiad | 12 | 12 | 0 | Z2 12 | permission request | permission pagmo (P3): 12 records |
| `pamo` | Pan-African Mathematics Olympiad | 240 | 142 | 0 | Z2 142 | permission request | permission pamo (P2): 142 records |
| `pamo-sl` | Pan-African Mathematics Olympiad Shortlist | 0 | 0 | 0 | no records | permission request | permission pamo (P2): 0 records |
| `pe-conosur-tst` | Peruvian Cono Sur Team Selection Test | 0 | 0 | 0 | no records | permission request | permission pe-mo (P3): 0 records |
| `pe-egmo-tst` | Peruvian EGMO Team Selection Test | 0 | 0 | 0 | no records | permission request | permission pe-mo (P3): 0 records |
| `pe-ibero-tst` | Peruvian Iberoamerican Team Selection Test | 0 | 0 | 0 | no records | permission request | permission pe-mo (P3): 0 records |
| `pe-mo` | Peru national mathematics olympiad | 76 | 28 | 0 | Z2 28 | permission request | permission pe-mo (P3): 28 records |
| `pe-pagmo-tst` | Peruvian PAGMO Team Selection Test | 0 | 0 | 0 | no records | permission request | permission pe-mo (P3): 0 records |
| `pe-tst` | Peruvian IMO Team Selection Test | 0 | 0 | 0 | no records | permission request | permission pe-mo (P3): 0 records |
| `ph-mtap` | Metrobank-MTAP-DepEd Math Challenge | 0 | 0 | 0 | no records | permission request | permission mtap (P3): 0 records |
| `ph-pmo` | Philippine Mathematical Olympiad | 98 | 90 | 0 | Z2 90 | permission request | permission pmo (P2): 90 records |
| `ph-pmo-area` | Philippine Mathematical Olympiad Area Stage | 0 | 0 | 0 | no records | permission request | permission pmo (P2): 0 records |
| `ph-pmo-oral` | Philippine Mathematical Olympiad National Stage Oral Phase | 0 | 0 | 0 | no records | permission request | permission pmo (P2): 0 records |
| `ph-pmo-qualifying` | Philippine Mathematical Olympiad Qualifying Stage | 0 | 0 | 0 | no records | permission request | permission pmo (P2): 0 records |
| `ph-tst` | Philippine Team Selection Test | 0 | 0 | 0 | no records | permission request | permission pmo (P2): 0 records |
| `pk-mo` | Pakistan national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission pk-mo (P3): 0 records |
| `pk-tst` | Pakistan Team Selection Test | 0 | 0 | 0 | no records | permission request | permission pk-mo (P3): 0 records |
| `pl-om` | Polish Mathematical Olympiad | 456 | 447 | 0 | Z2 447 | permission request | permission sem-pl (P1), ptm (P1): 447 records |
| `pl-om-r1` | Polish Mathematical Olympiad, First Round | 0 | 0 | 0 | no records | permission request | permission sem-pl (P1), ptm (P1): 0 records |
| `pl-om-r2` | Polish Mathematical Olympiad, Second Round | 0 | 0 | 0 | no records | permission request | permission sem-pl (P1), ptm (P1): 0 records |
| `pl-omj` | Polish Junior Mathematical Olympiad | 3 | 3 | 0 | Z2 3 | permission request | permission sem-pl (P1): 3 records |
| `pl-omj-r1` | Polish Junior Mathematical Olympiad, First Round | 0 | 0 | 0 | no records | permission request | permission sem-pl (P1): 0 records |
| `pl-omj-r2` | Polish Junior Mathematical Olympiad, Second Round | 0 | 0 | 0 | no records | permission request | permission sem-pl (P1): 0 records |
| `pmwc` | Primary Mathematics World Contest | 0 | 0 | 0 | no records | permission request | permission pmwc (P3): 0 records |
| `pr-tst` | Puerto Rico Team Selection Test | 0 | 0 | 0 | no records | permission request | permission pr-tst (P3): 0 records |
| `ps-mo` | Palestine national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission ps-mo (P3): 0 records |
| `pt-opm` | Portuguese Mathematical Olympiad | 188 | 188 | 0 | Z2 188 | permission request | permission spm (P2): 188 records |
| `pt-opm-a` | Portuguese Mathematical Olympiad, Category A | 0 | 0 | 0 | no records | permission request | permission spm (P2): 0 records |
| `pt-opm-elim` | Portuguese Mathematical Olympiad, Qualifying Rounds | 0 | 0 | 0 | no records | permission request | permission spm (P2): 0 records |
| `pt-opm-junior` | Portuguese Mathematical Olympiad, Junior Category | 0 | 0 | 0 | no records | permission request | permission spm (P2): 0 records |
| `pumac` | Princeton University Mathematics Competition | 1570 | 1142 | 0 | Z2 1142 | permission request | permission pumac (P1): 1142 records |
| `purple-comet` | Purple Comet! Math Meet | 0 | 0 | 0 | no records | permission request | permission purple-comet (P3): 0 records |
| `putnam` | William Lowell Putnam Mathematical Competition | 1098 | 1048 | 0 | Z2 1048 | public domain 1938-1963 (candidate) | public domain 1938-1963 (PD-US-RENEWAL; candidate: needs a renewal search of the AMM issues that printed the papers): 305 records; permission maa (P0): 743 records |
| `py-junior` | Paraguayan Junior Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission omapa (P3): 0 records |
| `py-mo` | Paraguayan Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission omapa (P3): 0 records |
| `qa-mo` | Qatar national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission qa-mo (P3): 0 records |
| `rioplatense` | Olimpiada Rioplatense | 186 | 125 | 0 | Z2 125 | permission request | permission oma (P2): 125 records |
| `rmm` | Romanian Master of Mathematics | 114 | 98 | 0 | Z2 98 | permission request | permission rmm (P2): 98 records |
| `rmt` | Rice Math Tournament | 0 | 0 | 0 | no records | permission request | permission rmt (P3): 0 records |
| `ro-bogdan-stan` | Bogdan Stan Mathematics Competition | 0 | 0 | 0 | no records | permission request | permission ro-bogdan-stan (P3): 0 records |
| `ro-clock-tower` | Clock-Tower School Competition | 0 | 0 | 0 | no records | permission request | permission ro-clock-tower (P3): 0 records |
| `ro-coculescu` | Nicolae Coculescu Mathematics Competition | 0 | 0 | 0 | no records | permission request | permission ro-coculescu (P3): 0 records |
| `ro-county` | Romanian Mathematical Olympiad, county round | 0 | 0 | 0 | no records | permission request | permission ssmr (P1): 0 records |
| `ro-duican` | Laurențiu Duican Mathematics Competition | 0 | 0 | 0 | no records | permission request | permission ro-duican (P3): 0 records |
| `ro-egmo-tst` | Romanian EGMO Team Selection Test | 0 | 0 | 0 | no records | permission request | permission ssmr (P1): 0 records |
| `ro-golden-digits` | The Golden Digits Competition | 0 | 0 | 0 | no records | permission request | permission ro-golden-digits (P3): 0 records |
| `ro-imar` | IMAR Mathematical Competition | 0 | 0 | 0 | no records | permission request | permission imar (P3): 0 records |
| `ro-ivanescu` | Cezar Ivănescu Mathematics Competition | 0 | 0 | 0 | no records | permission request | permission ro-ivanescu (P3): 0 records |
| `ro-jbmo-tst` | Romanian JBMO Team Selection Test | 0 | 0 | 0 | no records | permission request | permission ssmr (P1): 0 records |
| `ro-local` | Romanian Mathematical Olympiad, local round | 0 | 0 | 0 | no records | permission request | permission ssmr (P1): 0 records |
| `ro-mihaileanu` | N. N. Mihăileanu Mathematics Competition | 0 | 0 | 0 | no records | permission request | permission ro-mihaileanu (P3): 0 records |
| `ro-moisil` | Grigore Moisil Mathematics Competition (Urziceni) | 0 | 0 | 0 | no records | permission request | permission ro-moisil (P3): 0 records |
| `ro-nmo` | Romanian National Mathematical Olympiad | 408 | 354 | 0 | Z2 354 | permission request | permission ssmr (P1): 354 records |
| `ro-ongm` | Gazeta Matematică National Olympiad | 0 | 0 | 0 | no records | permission request | permission ssmr (P1): 0 records |
| `ro-panaitopol` | Laurențiu Panaitopol Mathematics Competition | 0 | 0 | 0 | no records | permission request | permission ro-panaitopol (P3): 0 records |
| `ro-paun` | Nicolae Păun Mathematics Competition | 0 | 0 | 0 | no records | permission request | permission ro-paun (P3): 0 records |
| `ro-ramnicean-hope` | Râmnicean Hope Mathematics Competition | 0 | 0 | 0 | no records | permission request | permission ro-ramnicean-hope (P3): 0 records |
| `ro-science-on` | Science ON Competition | 0 | 0 | 0 | no records | permission request | permission ro-science-on (P3): 0 records |
| `ro-stars` | Stars of Mathematics | 0 | 0 | 0 | no records | permission request | permission ro-stars (P3): 0 records |
| `ro-suceava` | Centres of Excellence of Suceava Competition | 0 | 0 | 0 | no records | permission request | permission ro-suceava (P3): 0 records |
| `ro-titeica` | Gheorghe Țițeica Mathematics Competition | 0 | 0 | 0 | no records | permission request | permission ro-titeica (P3): 0 records |
| `ro-topan` | Teodor Topan Mathematics Competition | 0 | 0 | 0 | no records | permission request | permission ro-topan (P3): 0 records |
| `ro-trident` | Petru Moroșan-Trident Mathematics Competition | 0 | 0 | 0 | no records | permission request | permission ro-trident (P3): 0 records |
| `ro-tst` | Romanian IMO Team Selection Test | 245 | 245 | 0 | Z2 245 | permission request | permission ssmr (P1): 245 records |
| `ro-unirea` | Unirea Mathematics Competition | 0 | 0 | 0 | no records | permission request | permission ro-unirea (P3): 0 records |
| `ro-valcovici` | Victor Vâlcovici Mathematics Competition | 0 | 0 | 0 | no records | permission request | permission ro-valcovici (P3): 0 records |
| `rs-jbmo-tst` | Serbian JBMO Team Selection Test | 0 | 0 | 0 | no records | permission request | permission dms-rs (P2): 0 records |
| `rs-primary` | Serbian Mathematics Competitions for Primary Schools | 0 | 0 | 0 | no records | permission request | permission dms-rs (P2): 0 records |
| `rs-smo` | Serbian Mathematical Olympiad | 108 | 94 | 0 | Z2 94 | permission request | permission dms-rs (P2): 94 records |
| `rs-tst` | Serbian Team Selection Test | 0 | 0 | 0 | no records | permission request | permission dms-rs (P2): 0 records |
| `ru-239-open` | 239 Lyceum Open Olympiad | 7 | 7 | 0 | Z2 7 | permission request | permission lyceum-239 (P3): 7 records |
| `ru-adygea-teachers` | Adygea Teachers' Geometry Olympiad | 0 | 0 | 0 | no records | permission request | permission ru-adygea-teachers (P3): 0 records |
| `ru-allrussian` | All-Russian Mathematical Olympiad | 1106 | 1106 | 0 | Z2 917 / Z3 189 | permission request | permission vsosh-math (P1): 1106 records |
| `ru-allrussian-municipal` | All-Russian Mathematical Olympiad, municipal stage | 0 | 0 | 0 | no records | permission request | permission vsosh-math (P1): 0 records |
| `ru-allrussian-regional` | All-Russian Mathematical Olympiad, regional stage | 0 | 0 | 0 | no records | permission request | permission vsosh-math (P1): 0 records |
| `ru-allrussian-school` | All-Russian Mathematical Olympiad, school stage | 0 | 0 | 0 | no records | permission request | permission vsosh-math (P1): 0 records |
| `ru-euler` | Euler Olympiad | 0 | 0 | 0 | no records | permission request | permission mccme (P0): 0 records |
| `ru-formulo` | Formula of Unity / Third Millennium Olympiad | 0 | 0 | 0 | no records | permission request | permission formulo (P3): 0 records |
| `ru-hse` | Vysshaya Proba Olympiad in Mathematics | 0 | 0 | 0 | no records | permission request | permission hse (P3): 0 records |
| `ru-kurchatov` | Kurchatov Olympiad in Mathematics | 0 | 0 | 0 | no records | permission request | permission kurchatov (P3): 0 records |
| `ru-lomonosov` | Lomonosov Tournament | 195 | 195 | 0 | Z2 132 / Z3 63 | open terms found | open terms of source turlom at https://olympiads.mccme.ru/turlom/info-status.htm: the status page (2012-12-23) gives the site free status, usable and distributable without limits where lawful; materials placed before 2012 keep the status of their first publication: 30 records; permission turlom (P1): 165 records |
| `ru-lomonosov-msu` | Lomonosov Olympiad (Moscow State University) | 0 | 0 | 0 | no records | permission request | permission msu (P3): 0 records |
| `ru-moscow` | Moscow Mathematical Olympiad | 1040 | 1040 | 0 | Z2 960 / Z3 80 | permission request | permission mccme (P0): 1040 records |
| `ru-okruzhnaya` | Moscow District Olympiad | 0 | 0 | 0 | no records | permission request | permission mccme (P0): 0 records |
| `ru-ommo` | Joint Interuniversity Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission ru-ommo (P3): 0 records |
| `ru-oral-67` | Moscow Oral Olympiad for Grades 6 and 7 | 0 | 0 | 0 | no records | permission request | permission mccme (P0): 0 records |
| `ru-oral-geometry` | Moscow Oral Geometry Olympiad | 27 | 27 | 0 | Z2 27 | permission request | permission mccme (P0): 27 records |
| `ru-phystech` | Phystech Olympiad in Mathematics | 0 | 0 | 0 | no records | permission request | permission mipt (P3): 0 records |
| `ru-prazdnik` | Mathematical Festival | 0 | 0 | 0 | no records | permission request | permission mccme (P0): 0 records |
| `ru-pvg` | Pokori Vorobyovy Gory Olympiad | 0 | 0 | 0 | no records | permission request | permission msu (P3): 0 records |
| `ru-regata` | Moscow Mathematical Regatta | 0 | 0 | 0 | no records | permission request | permission mccme (P0): 0 records |
| `ru-spb` | St Petersburg Mathematical Olympiad | 315 | 305 | 0 | Z2 305 | permission request | permission pdmi-olymp (P1): 305 records |
| `ru-spbu` | St Petersburg State University Olympiad in Mathematics | 0 | 0 | 0 | no records | permission request | permission spbu (P3): 0 records |
| `ru-student` | Russian and Soviet Student Olympiads | 0 | 0 | 0 | no records | permission request | permission ru-student (P3): 0 records |
| `ru-tst` | Russian IMO Team Selection Test | 3 | 3 | 0 | Z2 3 | permission request | permission vsosh-math (P1): 3 records |
| `ru-vsesib` | All-Siberian Open Olympiad in Mathematics | 0 | 0 | 0 | no records | permission request | permission nsu (P3): 0 records |
| `ru-yumsh` | YuMSh Olympiad | 0 | 0 | 0 | no records | permission request | permission yumsh (P3): 0 records |
| `rw-mo` | Rwanda national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission rw-mo (P3): 0 records |
| `sa-samc` | Saudi Arabia Mathematical Competition | 0 | 0 | 0 | no records | permission request | permission sa-mo (P3): 0 records |
| `safest` | South Africa - Estonia Olympiad | 0 | 0 | 0 | no records | permission request | permission safest (P3): 0 records |
| `sasmo` | Singapore and Asian Schools Math Olympiad | 0 | 0 | 0 | no records | permission request | permission simcc (P3): 0 records |
| `schweitzer` | Miklós Schweitzer Competition | 697 | 697 | 0 | Z2 697 | permission request | permission bolyai (P1): 697 records |
| `sdmo-hs` | San Diego Math Olympiad, High School | 0 | 0 | 0 | no records | permission request | permission sdmo (P3): 0 records |
| `sdmo-ms` | San Diego Math Olympiad, Middle School | 0 | 0 | 0 | no records | permission request | permission sdmo (P3): 0 records |
| `sdpc` | San Diego Power Contest | 0 | 0 | 0 | no records | permission request | permission sdpc (P3): 0 records |
| `se-skolornas` | Swedish Mathematical Competition | 379 | 375 | 0 | Z2 375 | permission request | permission skolornas (P1): 375 records |
| `se-skolornas-kval` | Swedish Mathematical Competition, Qualifying Round | 0 | 0 | 0 | no records | permission request | permission skolornas (P1): 0 records |
| `seamo` | Southeast Asian Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission seamo (P3): 0 records |
| `seemous` | South Eastern European Mathematical Olympiad for University Students | 80 | 44 | 0 | Z2 44 | permission request | permission massee (P3): 44 records |
| `sg-smo` | Singapore Mathematical Olympiad | 160 | 116 | 0 | Z2 116 | permission request | permission sms (P1): 116 records |
| `sg-smo-junior` | Singapore Mathematical Olympiad Junior Section | 0 | 0 | 0 | no records | permission request | permission sms (P1): 0 records |
| `sg-smo-open-r1` | Singapore Mathematical Olympiad Open Section Round 1 | 0 | 0 | 0 | no records | permission request | permission sms (P1): 0 records |
| `sg-smo-senior` | Singapore Mathematical Olympiad Senior Section | 0 | 0 | 0 | no records | permission request | permission sms (P1): 0 records |
| `sg-smops` | Singapore Mathematical Olympiad for Primary Schools | 0 | 0 | 0 | no records | permission request | permission nus-high (P3): 0 records |
| `sg-tst` | Singapore Team Selection Test | 0 | 0 | 0 | no records | permission request | permission sms (P1): 0 records |
| `sharygin` | Sharygin Geometry Olympiad | 893 | 893 | 0 | Z2 893 | permission request | permission sharygin (P1): 893 records |
| `si-mo` | Slovenia national mathematics olympiad | 456 | 456 | 0 | Z2 28 / Z3 428 | permission request | permission dmfa (P1): 456 records |
| `si-mo-qual` | Slovenia national mathematics olympiad, Qualifying Round | 0 | 0 | 0 | no records | permission request | permission dmfa (P1): 0 records |
| `si-tech` | Slovenian Competition for Technical and Vocational Schools | 0 | 0 | 0 | no records | permission request | permission dmfa (P1): 0 records |
| `si-tech-qual` | Slovenian Competition for Technical and Vocational Schools, Qualifying Round | 0 | 0 | 0 | no records | permission request | permission dmfa (P1): 0 records |
| `si-tst` | Slovenian Team Selection Test | 0 | 0 | 0 | no records | permission request | permission dmfa (P1): 0 records |
| `si-vega` | Slovenian Primary School Mathematics Competition (Vega) | 0 | 0 | 0 | no records | permission request | permission dmfa (P1): 0 records |
| `silk-road` | Silk Road Mathematical Competition | 100 | 83 | 0 | Z2 83 | permission request | permission silk-road (P2): 83 records |
| `simon-marais` | Simon Marais Mathematics Competition | 80 | 72 | 0 | Z2 72 | permission request | permission simon-marais (P2): 72 records |
| `smt` | Stanford Math Tournament | 1111 | 1062 | 0 | Z2 1062 | permission request | permission smt (P1): 1062 records |
| `sn-mo` | Senegal national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission sn-mo (P3): 0 records |
| `sv-correspondence` | El Salvador Correspondence Olympiad | 0 | 0 | 0 | no records | permission request | permission sv-correspondence (P3): 0 records |
| `sy-mo` | Syrian Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission sy-mo (P3): 0 records |
| `th-mathcenter` | Mathcenter Contest | 0 | 0 | 0 | no records | permission request | permission mathcenter (P3): 0 records |
| `th-posn` | POSN Mathematics Camp 1 Selection Examination | 0 | 0 | 0 | no records | permission request | permission posn (P1): 0 records |
| `th-t3mo` | T3MO | 0 | 0 | 0 | no records | permission request | permission th-t3mo (P3): 0 records |
| `th-tmo` | Thailand Mathematical Olympiad | 316 | 281 | 0 | Z2 281 | permission request | permission posn (P1): 281 records |
| `th-tomo` | Thailand Online Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission th-tomo (P3): 0 records |
| `th-tst` | Thailand Team Selection Test | 0 | 0 | 0 | no records | permission request | permission posn (P1): 0 records |
| `tj-mo` | Tajikistan national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission tj-mo (P3): 0 records |
| `tj-tst` | Tajikistan Team Selection Test | 0 | 0 | 0 | no records | permission request | permission tj-mo (P3): 0 records |
| `tm-mo` | Turkmenistan national mathematics olympiad | 3 | 3 | 0 | Z2 3 | permission request | permission tm-mo (P3): 3 records |
| `tm-regional` | Turkmenistan Regional Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission tm-mo (P3): 0 records |
| `tn-mo` | Tunisia national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission tn-mo (P3): 0 records |
| `tot` | Tournament of Towns | 1056 | 1056 | 0 | Z2 1047 / Z3 9 | permission request | permission tot (P1): 1056 records |
| `tr-akdeniz` | Akdeniz University Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission akdeniz (P3): 0 records |
| `tr-egmo-tst` | Turkish EGMO Team Selection Test | 0 | 0 | 0 | no records | permission request | permission tubitak (P1): 0 records |
| `tr-jbmo-tst` | Turkish JBMO Team Selection Test | 0 | 0 | 0 | no records | permission request | permission tubitak (P1): 0 records |
| `tr-jmo` | Turkish Junior Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission tubitak (P1): 0 records |
| `tr-mo` | Turkish Mathematical Olympiad | 198 | 191 | 0 | Z2 191 | permission request | permission tubitak (P1): 191 records |
| `tr-mo-r1` | Turkish Mathematical Olympiad, first round | 600 | 600 | 0 | Z2 600 | permission request | permission tubitak (P1): 600 records |
| `tr-revenge` | Turkey Olympic Revenge | 0 | 0 | 0 | no records | permission request | permission tr-revenge (P3): 0 records |
| `tr-tst` | Turkish IMO Team Selection Test | 0 | 0 | 0 | no records | permission request | permission tubitak (P1): 0 records |
| `tstst` | USA TST for the TST | 132 | 131 | 0 | Z2 131 | permission request | permission maa (P0): 131 records |
| `tuymaada` | Tuymaada Olympiad | 308 | 308 | 0 | Z2 308 | permission request | permission tuymaada (P1): 308 records |
| `tw-apmo-prelim` | Taiwan APMO Preliminary | 0 | 0 | 0 | no records | permission request | permission tw-tst (P1): 0 records |
| `tw-egmo-prelim` | Taiwan EGMO Preliminary | 0 | 0 | 0 | no records | permission request | permission tw-tst (P1): 0 records |
| `tw-imoc` | IMOC | 0 | 0 | 0 | no records | permission request | permission tw-imoc (P3): 0 records |
| `tw-tmo` | Taiwan Mathematical Olympiad Examination | 0 | 0 | 0 | no records | permission request | permission tw-tst (P1): 0 records |
| `tw-tst` | Taiwan TST and National Olympiad | 159 | 62 | 0 | Z2 62 | permission request | permission tw-tst (P1): 62 records |
| `tz-mo` | Tanzania national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission tz-mo (P3): 0 records |
| `ua-champions` | Champions Tournament | 0 | 0 | 0 | no records | permission request | permission ua-champions (P3): 0 records |
| `ua-correspondence` | Ukrainian Correspondence Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission ua-correspondence (P3): 0 records |
| `ua-geometry` | Ukrainian Geometry Olympiad | 0 | 0 | 0 | no records | permission request | permission ua-geometry (P3): 0 records |
| `ua-kharkiv` | Kharkiv City Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission ua-kharkiv (P3): 0 records |
| `ua-kyiv` | Kyiv City Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission kyiv-olymp (P3): 0 records |
| `ua-soros` | Soros Olympiad in Mathematics | 0 | 0 | 0 | no records | permission request | permission ua-soros (P3): 0 records |
| `ua-tasks` | From Tasks to Tasks | 0 | 0 | 0 | no records | permission request | permission ua-tasks (P3): 0 records |
| `ua-umo` | Ukrainian Mathematical Olympiad | 208 | 136 | 0 | Z2 136 | permission request | permission ua-umo (P1): 136 records |
| `ua-umo-district` | Ukrainian Mathematical Olympiad, district stage | 0 | 0 | 0 | no records | permission request | permission ua-umo (P1): 0 records |
| `ua-umo-regional` | Ukrainian Mathematical Olympiad, regional stage | 0 | 0 | 0 | no records | permission request | permission ua-umo (P1): 0 records |
| `ua-yasinskyi` | Yasinskyi Geometry Olympiad | 0 | 0 | 0 | no records | permission request | permission ua-yasinskyi (P3): 0 records |
| `ug-mo` | Uganda national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission ug-mo (P3): 0 records |
| `uk-bmo1` | British Mathematical Olympiad Round 1 | 372 | 324 | 0 | Z2 324 | permission request | permission ukmt (P1): 324 records |
| `uk-bmo2` | British Mathematical Olympiad Round 2 | 234 | 226 | 0 | Z2 226 | permission request | permission ukmt (P1): 226 records |
| `uk-imc` | UKMT Intermediate Mathematical Challenge | 0 | 0 | 0 | no records | permission request | permission ukmt (P1): 0 records |
| `uk-imoc` | UKMT Intermediate Mathematical Olympiad (Cayley, Hamilton, Maclaurin) | 0 | 0 | 0 | no records | permission request | permission ukmt (P1): 0 records |
| `uk-jmc` | UKMT Junior Mathematical Challenge | 0 | 0 | 0 | no records | permission request | permission ukmt (P1): 0 records |
| `uk-jmo` | UKMT Junior Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission ukmt (P1): 0 records |
| `uk-mog` | UKMT Mathematical Olympiad for Girls | 0 | 0 | 0 | no records | permission request | permission ukmt (P1): 0 records |
| `uk-pmc` | Primary Mathematics Challenge | 0 | 0 | 0 | no records | permission request | permission math-association (P3): 0 records |
| `uk-smc` | UKMT Senior Mathematical Challenge | 0 | 0 | 0 | no records | permission request | permission ukmt (P1): 0 records |
| `uk-stmc` | UKMT Senior Team Mathematical Challenge | 0 | 0 | 0 | no records | permission request | permission ukmt (P1): 0 records |
| `uk-tmc` | UKMT Team Mathematical Challenge | 0 | 0 | 0 | no records | permission request | permission ukmt (P1): 0 records |
| `uk-tst` | UK IMO Selection Tests | 0 | 0 | 0 | no records | permission request | permission ukmt (P1): 0 records |
| `uk-ukmt` | UKMT Challenges, Kangaroos and Olympiads | 0 | 0 | 0 | no records | permission request | permission ukmt (P1): 0 records |
| `umd-hsmc1` | University of Maryland High School Mathematics Competition, Part I | 0 | 0 | 0 | no records | permission request | permission umd-hsmc (P3): 0 records |
| `umd-hsmc2` | University of Maryland High School Mathematics Competition, Part II | 0 | 0 | 0 | no records | permission request | permission umd-hsmc (P3): 0 records |
| `us-egmo-tst` | USA EGMO Team Selection Test | 24 | 19 | 0 | Z2 19 | permission request | permission maa (P0): 19 records |
| `us-tst` | USA IMO Team Selection Test | 164 | 146 | 0 | Z2 146 | permission request | permission maa (P0): 146 records |
| `usajmo` | United States of America Junior Mathematical Olympiad | 102 | 60 | 0 | Z2 60 | permission request | permission maa (P0): 60 records |
| `usamo` | United States of America Mathematical Olympiad | 306 | 298 | 0 | Z2 298 | permission request | permission maa (P0): 298 records |
| `usamts` | USA Mathematical Talent Search | 0 | 0 | 0 | no records | permission request | permission usamts (P3): 0 records |
| `usemo` | US Ersatz Math Olympiad | 48 | 12 | 0 | Z2 12 | permission request | permission evan-chen (P1): 12 records |
| `usmca` | US Math Competition Association | 0 | 0 | 0 | no records | permission request | permission usmca (P3): 0 records |
| `utah-mo` | Utah Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission utah-mo (P3): 0 records |
| `uy-mo` | Uruguay national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission uy-mo (P3): 0 records |
| `uy-tst` | Uruguayan IMO Team Selection Test | 0 | 0 | 0 | no records | permission request | permission uy-mo (P3): 0 records |
| `uz-ijmo` | Al-Khwarizmi International Junior Mathematical Olympiad | 0 | 0 | 0 | no records | permission request | permission uz-mo (P1): 0 records |
| `uz-mo` | Uzbekistan national mathematics olympiad | 26 | 26 | 0 | Z2 26 | permission request | permission uz-mo (P1): 26 records |
| `ve-mo` | Venezuela national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission ve-mo (P3): 0 records |
| `vn-homc` | Hanoi Open Mathematics Competition | 0 | 0 | 0 | no records | permission request | permission hanoi-ms (P3): 0 records |
| `vn-hsg-12` | Vietnam provincial olympiads for grade 12 | 0 | 0 | 0 | no records | permission request | permission vn-moet (P1): 0 records |
| `vn-hsg-9` | Vietnam provincial olympiads for grade 9 | 0 | 0 | 0 | no records | permission request | permission vn-moet (P1): 0 records |
| `vn-olympic-304` | April 30 Traditional Olympiad | 0 | 0 | 0 | no records | permission request | permission lhp-hcm (P3): 0 records |
| `vn-tst` | Vietnam Team Selection Test | 222 | 185 | 0 | Z2 185 | permission request | permission vn-moet (P1): 185 records |
| `vn-vmeo` | Vietnam Mathematical E-Olympiad | 0 | 0 | 0 | no records | permission request | permission vn-vmeo (P3): 0 records |
| `vn-vmo` | Vietnam Mathematical Olympiad | 405 | 323 | 0 | Z2 323 | permission request | permission vn-moet (P1): 323 records |
| `vtrmc` | Virginia Tech Regional Mathematics Contest | 307 | 305 | 0 | Z2 305 | permission request | permission vtrmc (P1): 305 records |
| `wmi` | World Mathematics Invitational | 0 | 0 | 0 | no records | permission request | permission wmi (P3): 0 records |
| `xk-mo` | Kosovo national mathematics olympiad | 57 | 57 | 0 | Z2 57 | permission request | permission xk-mo (P2): 57 records |
| `xk-tst` | Kosovo Team Selection Test | 34 | 34 | 0 | Z2 34 | permission request | permission xk-mo (P2): 34 records |
| `yu-federal` | Yugoslav Federal Mathematics Competition | 0 | 0 | 0 | no records | permission request | permission dms-rs (P2): 0 records |
| `za-samo` | South African Mathematics Olympiad | 186 | 166 | 0 | Z2 166 | permission request | permission samf (P2): 166 records |
| `zhautykov` | International Zhautykov Olympiad | 132 | 85 | 0 | Z2 85 | permission request | permission izho (P2): 85 records |
| `zw-mo` | Zimbabwe national mathematics olympiad | 0 | 0 | 0 | no records | permission request | permission zw-mo (P3): 0 records |
