---
tag: XQM67F9ZDQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1422711
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78573
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267420
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
Let $n$ be a fixed positive integer. For integer $m$ satisfying $|m| \le n$ , define $S_m= \sum_{\substack{i-j=m 0 \le i,j \le n}} \dfrac{1}{2^{i+j}}$ . Then $$\lim_{n\to \infty} \left( S_{-n}^2 + S_{-n+1}^2 +... + S_n^2 \right)$$ can be expressed in the form $\dfrac{p}{q}$ for relatively prime positive integers $p,q$ . Compute $100p+q$ .

*Proposed by Vincent Huang*
