---
tag: WBHR4AESKK
kind: problem
type: answer
answer: 32 \times \binom{20}{5}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239394
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A finite sequence of numbers $(a_1,\cdots,a_n)$ is said to be alternating if $$a_1>a_2~,~a_2<a_3~,~a_3>a_4~,~a_4<a_5~,~\cdots$$ $$\text{or ~}~~a_1<a_2~,~a_2>a_3~,~a_3<a_4~,~a_4>a_5~,~\cdots$$ How many alternating sequences of length $5$ , with distinct numbers $a_1,\cdots,a_5$ can be formed such that $a_i\in\{1,2,\cdots,20\}$ for $i=1,\cdots,5$ ?
