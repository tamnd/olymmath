---
tag: BT3G25VTC8
kind: problem
type: answer
answer: They are equal; the numbers are the same for every n.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0000.parquet#row=50
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine Ukrainian Mathematical Olympiad
---
There are $n \ge 3$ soldiers in the captain Petrenko's squad, and none two of them have the same height. The captain has drawn them all up into a single rank (not necessarily sorted by height). We call a "wave" any subsequence of soldiers in this rank (they are not supposed to stand next to each other) such that the first (leftmost) soldier in the wave is higher than the second soldier in it, but the second soldier in it is lower than the third one, who is in turn higher than the fourth one, and so on. (For example, if $n=9$, the soldiers are enumerated in ascending order by height, and the captain aligned them as 9-3-5-7-1-2-6-4-8, then one of the longest waves for this rank is 9-3-7-1-6-4-8. However, if the captain aligns them as 1-2-3-4-5-6-7-8-9, then each longest wave will consist of a single soldier, who can be anyone.) For every $n$, consider the number of possible ranks with the longest waves of even lengths and the number of possible ranks with the longest waves of odd lengths. Which of these numbers is bigger?
