---
tag: 2C9R2PGD3R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1541573
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78615
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267462
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2017
    source: hf-ai-mo-aops
    label: 2017 Online Math Open Problems
---
Given a sequence of positive integers $a_1, a_2, a_3, \dots, a_{n}$ , define the \emph{power tower function} $$f(a_1, a_2, a_3, \dots, a_{n})=a_1^{a_2^{a_3^{\mathstrut^{ .^{.^{.^{a_{n}}}}}}}}.$$ Let $b_1, b_2, b_3, \dots, b_{2017}$ be positive integers such that for any $i$ between 1 and 2017 inclusive, $$f(a_1, a_2, a_3, \dots, a_i, \dots, a_{2017})\equiv f(a_1, a_2, a_3, \dots, a_i+b_i, \dots, a_{2017}) \pmod{2017}$$ for all sequences $a_1, a_2, a_3, \dots, a_{2017}$ of positive integers greater than 2017. Find the smallest possible value of $b_1+b_2+b_3+\dots+b_{2017}$ .

*Proposed by Yannick Yao
