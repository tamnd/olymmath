---
tag: VGXDK2E7RM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 BMT
    url: https://artofproblemsolving.com/community/c6h3282163
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70545
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2023
    source: hf-ai-mo-aops
    label: 2023 BMT
---
Define the sequence $s_0$ , $s_1$ , $s_2$ , $ . . .$ by $s_0 = 0$ and $s_n = 3s_{n-1}+2$ for $n \ge 1$ . The monic polynomial $f(x)$ defined as $$ f(x) =\frac{1}{s_{2023}} \sum^{32}_{k=0} s_{2023+k}x^{32-k} $$ can be factored uniquely (up to permutation) as the product of $16$ monic quadratic polynomials $p_1$ , $p_2$ , $....$ , $p_{16}$ with real coefficients, where $p_i(x) = x^2 + a_ix + b_i$ for $1\le i \le 16$ . Compute the integer $N$ that minimizes
$$ \left|N - \sum^{16}_{k=1} (a_k + b_k)\right|. $$
