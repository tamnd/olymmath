---
tag: 95YMVWH6QD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h2055653
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19268
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220811
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2020
    source: hf-ai-mo-aops
    label: 2020 Online Math Open Problems
---
Vincent has a fair die with sides labeled $1$ to $6$ . He first rolls the die and records it on a piece of paper. Then, every second thereafter, he re-rolls the die. If Vincent rolls a different value than his previous roll, he records the value and continues rolling. If Vincent rolls the same value, he stops, does \emph{not} record his final roll, and computes the average of his previously recorded rolls. Given that Vincent first rolled a $1$ , let $E$ be the expected value of his result. There exist rational numbers $r,s,t > 0$ such that $E = r-s\ln t$ and $t$ is not a perfect power. If $r+s+t = \frac mn$ for relatively prime positive integers $m$ and $n$ , compute $100m+n$ .

*Proposed by Sean Li*
