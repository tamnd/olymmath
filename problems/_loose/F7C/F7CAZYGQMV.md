---
tag: F7CAZYGQMV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1422712
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78574
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267421
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
When Cirno walks into her perfect math class today, she sees a polynomial $P(x)=1$ (of degree 0) on the blackboard. As her teacher explains, for her pop quiz today, she will have to perform one of the two actions every minute:

(a) Add a monomial to $P(x)$ so that the degree of $P$ increases by 1 and $P$ remains monic;
(b) Replace the current polynomial $P(x)$ by $P(x+1)$ . For example, if the current polynomial is $x^2+2x+3$ , then she will change it to $(x+1)^2+2(x+1)+3=x^2+4x+6$ .

Her score for the pop quiz is the sum of coefficients of the polynomial at the end of 9 minutes. Given that Cirno (miraculously) doesn't make any mistakes in performing the actions, what is the maximum score that she can get?

*Proposed by Yannick Yao*
