---
tag: EZ4CTAKJT4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h611765
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11677
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213634
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2014
    source: hf-ai-mo-aops
    label: 2014 Online Math Open Problems
---
Let $\phi = \frac{1+\sqrt{5}}{2}$ . A *base- $\phi$ number* $(a_n a_{n-1} ... a_1 {a_0})_{\phi}$ , where $0 \le a_n, a_{n-1}, ..., a_0 \le 1$ are integers, is defined by $$ (a_n a_{n-1} ... a_1 {a_0})_{\phi} = a_n \cdot \phi^n + a_{n-1} \cdot \phi^{n-1} + ... + a_1 \cdot \phi^1 + a_0. $$
Compute the number of base- $\phi$ numbers $(b_jb_{j-1}... b_1{b_0})_\phi$ which satisfy $b_j \ne 0$ and
$$ (b_jb_{j-1}... b_1{b_0})_\phi = \underbrace{(100 ... 100)_\phi}_{\text{Twenty}\ 100's}. $$*Proposed by Yang Liu*
