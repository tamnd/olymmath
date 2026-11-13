---
tag: VSVQHGC2R4
kind: problem
type: answer
answer: "94"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265896
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Kevin writes a nonempty subset of $S = \{ 1, 2, \dots 41 \}$ on a board. Each day, Evan takes the set last written on the board and decreases each integer in it by $1.$ He calls the result $R.$ If $R$ does not contain $0$ he writes $R$ on the board. If $R$ contains $0$ he writes the set containing all elements of $S$ not in $R$. On Evan's $n$th day, he sees that he has written Kevin's original subset for the $1$st time. Find the sum of all possible $n.$
