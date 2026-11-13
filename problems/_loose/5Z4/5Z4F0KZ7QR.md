---
tag: 5Z4F0KZ7QR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1992 IMO Longlists
    url: https://artofproblemsolving.com/community/c6h220460
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25083
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225772
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ill/1992
    source: hf-ai-mo-aops
    label: 1992 IMO Longlists
---
Let $ \alpha(n)$ be the number of digits equal to one in the binary representation of a positive integer $ n.$ Prove that:

(a) the inequality $ \alpha(n) (n^2 ) \leq \frac{1}{2} \alpha(n)(\alpha(n) + 1)$ holds;
(b) the above inequality is an equality for infinitely many positive integers, and
(c) there exists a sequence $ (n_i )^{\infty}_1$ such that $ \frac{\alpha ( n^2_i )}{\alpha (n_i }$
goes to zero as $ i$ goes to $ \infty.$

*Alternative problem:* Prove that there exists a sequence a sequence $ (n_i )^{\infty}_1$ such that $ \frac{\alpha ( n^2_i )}{\alpha (n_i )}$

(d) $ \infty;$
(e) an arbitrary real number $ \gamma \in (0,1)$ ;
(f) an arbitrary real number $ \gamma \geq 0$ ;

as $ i$ goes to $ \infty.$
