---
tag: AZ25N6G3BS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Ukraine National Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3527227
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=3009
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo/2025
    source: hf-ai-mo-aops
    label: 2025 Ukraine National Mathematical Olympiad
---
Exactly $102$ country leaders arrived at the IMO. At the final session, the IMO chairperson wants to introduce some changes to the regulations, which the leaders must approve. To pass the changes, the chairperson must gather at least $\frac{2}{3}$ of the votes "FOR" out of the total number of leaders. Some leaders do not attend such meetings, and it is known that there will be exactly $81$ leaders present. The chairperson must seat them in a square-shaped conference hall of size $9 \times 9$, where each leader will be seated in a designated $1 \times 1$ cell. It is known that exactly $28$ of these $81$ leaders will surely support the chairperson, i.e., they will always vote "FOR." All others will vote as follows: At the last second of voting, they will look at how their neighbors voted up to that moment - neighbors are defined as leaders seated in adjacent cells $1 \times 1$ (sharing a side). If the majority of neighbors voted "FOR," they will also vote "FOR." If there is no such majority, they will vote "AGAINST." For example, a leader seated in a corner of the hall has exactly $2$ neighbors and will vote "FOR" only if both of their neighbors voted "FOR."

(a) Can the IMO chairperson arrange their $28$ supporters so that they vote "FOR" in the first second of voting and thereby secure a "FOR" vote from at least $\frac{2}{3}$ of all $102$ leaders?

(b) What is the maximum number of "FOR" votes the chairperson can obtain by seating their 28 supporters appropriately?

*Proposed by Bogdan Rublov*
