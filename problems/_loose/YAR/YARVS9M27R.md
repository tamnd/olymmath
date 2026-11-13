---
tag: YARVS9M27R
kind: problem
type: answer
answer: "8.3"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=169215
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Four people want to complete a journey of length $s$, but they only have one motorcycle. Their plan is as follows: they all start at the same time, $A$ and $B$ walk at a speed of $g$, while $C$ and $D$ ride the motorcycle at a speed of $m$ to a certain distance $d$. From there, $C$ continues on foot, and $D$ turns back to pick up $B$, bringing them forward until they catch up with $C$. Then $B$ and $C$ continue walking together, while $D$ turns back to pick up $A$ and brings them forward until they catch up with the others. At this point, they rest for $T$ time, and by repeating the previous plan twice, they exactly reach their destination. How did they choose the length of the $d$ segment? What average speed did the group plan for? - During the first rest, it turned out that the walking speed was only $g$ when two people walked together, but it was only $g_{1}(<g)$ when walking alone; furthermore, the motorcycle only reached the speed of $m$ without a passenger, but with a passenger, the speed was $m_{2}(<m)$. Did this affect the length of the $d$ segment in the repeated plan?

What fraction of the journey did each traveler complete on foot?

What was the average speed of the group?

Numerical data: $s=60 \mathrm{~km}, g=5, g_{1}=4, m=30, m_{2}=25 \mathrm{~km} /$ hour.
