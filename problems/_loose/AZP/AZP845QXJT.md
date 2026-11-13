---
tag: AZP845QXJT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h524537
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9962
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211958
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2013
    source: hf-ai-mo-aops
    label: 2013 NIMO Problems
---
For a finite set $X$ define $$
S(X) = \sum_{x \in X} x \text{ and }
P(x) = \prod_{x \in X} x.
$$ Let $A$ and $B$ be two finite sets of positive integers such that $\left\lvert A \right\rvert = \left\lvert B \right\rvert$ , $P(A) = P(B)$ and $S(A) \neq S(B)$ . Suppose for any $n \in A \cup B$ and prime $p$ dividing $n$ , we have $p^{36} \mid n$ and $p^{37} \nmid n$ . Prove that $$ \left\lvert S(A) - S(B) \right\rvert > 1.9 \cdot 10^{6}. $$*Proposed by Evan Chen*
