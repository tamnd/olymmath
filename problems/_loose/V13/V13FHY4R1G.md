---
tag: V13FHY4R1G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=10950
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Heating season. The municipal government of Zatonsk has adopted a rule: heating in houses should be turned on no earlier than October 26, but only if the average temperature over the previous three days is below $8^{\circ} \mathrm{C}$. The city has two districts: Coastal and Riverside.

In the Coastal district, the rule was understood as follows: if the average daily temperature is below $8^{\circ} \mathrm{C}$ for three consecutive days, then on the fourth day, heating should be turned on if this day is October 26 or later.

In the Riverside district, the rule was understood differently: if the average temperature over a three-day period is below $8^{\circ} \mathrm{C}$, then on the fourth day, heating should be turned on if this day is not earlier than October 26.

The table shows the average daily temperature for several days in October.

| Date | Oct 22 | Oct 23 | Oct 24 | Oct 25 | Oct 26 | Oct 27 | Oct 28 | Oct 29 | Oct 30 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Avg. Temp. ${ }^{\circ} \mathrm{C}$ | 3 | 9 | 10 | 6 | 3 | 7 | 10 | 6 | 8 |

a) (from 6th grade. 1 point). On what date was heating turned on in the Coastal district? On what date was heating turned on in the Riverside district?

b) (from 6th grade. 1 point). Prove that no matter what days occur in October, heating in the Riverside district will be turned on no later than in the Coastal district.
