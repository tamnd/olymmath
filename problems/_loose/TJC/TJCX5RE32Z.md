---
tag: TJCX5RE32Z
kind: problem
type: answer
answer: "505"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=137246
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The ball invited 2018 couples, who were arranged in areas numbered $1,2, \cdots, 2018$. The ball organizers stipulated: when the ball reaches the $i$-th minute, the couple standing in area $s_{i}$ (if there is someone in this area) will move to area $r_{i}$, and the couple originally in area $r_{i}$ (if there is someone in this area) will exit the dance, where,
$$
s_{i} \equiv i(\bmod 2018), r_{i} \equiv 2 i(\bmod 2018),
$$

and $1 \leqslant s_{i} 、 r_{i} \leqslant 2018$. According to this rule, when the ball has been going on for $2018^{2}$ minutes, how many couples are still dancing (Note: if $s_{i}=r_{i}$, then the couple in area $s_{i}$ remains in the original area and does not exit the dance)?
