---
tag: 1XDVZZQD0J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h65853
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44171
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240444
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2000
    source: hf-ai-mo-aops
    label: 2000 Iran MO (3rd Round)
---
A sequence of natural numbers $c_1, c_2,\dots$ is called *perfect* if every natural
number $m$ with $1\le m \le c_1 +\dots+ c_n$ can be represented as $m =\frac{c_1}{a_1}+\frac{c_2}{a_2}+\dots+\frac{c_n}{a_n}$ Given $n$ , find the maximum possible value of $c_n$ in a perfect sequence $(c_i)$ .
