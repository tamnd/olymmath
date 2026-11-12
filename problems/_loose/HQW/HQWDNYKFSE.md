---
tag: HQWDNYKFSE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=53536
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the school council, a chairman is being elected. There are four candidates: A, B, C, and D. A special procedure has been proposed - each council member must write down the candidates in order of their preferences. For example, ABCD means that the council member ranks A first, does not strongly object to C, and believes C is better than D, but least wants B to be the chairman. The first place gives a candidate 3 points, the second place 2 points, the third place 1 point, and the fourth place 0 points. After collecting all the sheets, the electoral commission sums up the points for each candidate. The winner is the one with the highest total points. After the voting, it turned out that C (who had the fewest points) withdrew their candidacy due to transferring to another school. They decided not to vote again but simply crossed out C from all the sheets. In each sheet, three candidates remained. Therefore, the first place now was worth 2 points, the second place 1 point, and the third place 0 points. The points were summed up again.

Could it happen that the candidate who previously had the most points ended up with the fewest points after C's withdrawal?
