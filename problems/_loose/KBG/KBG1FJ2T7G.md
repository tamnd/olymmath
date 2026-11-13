---
tag: KBG1FJ2T7G
kind: problem
type: answer
answer: "Yes"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0002.parquet#row=85
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm
    source: hf-mathnet
    label: Brazil Brazilian Math Olympiad
---
Determine if there exist positive integers $n, a_1, a_2, \dots, a_{2012}$ all greater than 1, such that
$$
n^2 = a_1^2 + a_2^3 + a_3^5 + \dots + a_i^{p_i} + \dots + a_{2012}^{p_{2012}},
$$
where $p_i$ is the *i*-th prime.
