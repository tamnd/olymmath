---
tag: DKQC7SDHJ1
kind: problem
type: answer
answer: 2d_{1}=d_{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104495
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence of three numbers $a, b, c$ form an arithmetic sequence if the difference between successive terms in the sequence is the same. That is, when $b-a=c-b$.
(a) The sequence $2, b, 8$ forms an arithmetic sequence. Determine $b$.
(b) Given a sequence $a, b, c$, let $d_{1}$ be the non-negative number to increase or decrease $b$ by so that, without changing $a$ or $c$, the result is an arithmetic sequence. Let $d_{2}$ be the positive number to increase or decrease $c$ by so that, without changing $a$ or $b$, the result is an arithmetic sequence.
For example, if the three-term sequence is $3,10,13$, then we need to decrease 10 to 8 to make the arithmetic sequence $3,8,13$. We decreased $b$ by 2 , so $d_{1}=2$. If we change the third term, we need to increase 13 to 17 to make the arithmetic sequence $3,10,17$. We increased 13 by 4 , so $d_{2}=4$.
Suppose the original three term sequence is $1,13,17$. Determine $d_{1}$ and $d_{2}$.
(c) Define $d_{1}, d_{2}$ as in part (b). For all three-term sequences, prove that $2 d_{1}=d_{2}$.
