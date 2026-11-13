---
tag: YXPQCP6WVN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1950 Miklós Schweitzer
    url: https://artofproblemsolving.com/community/c6h229335
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=41403
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238056
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: schweitzer/1950
    source: hf-ai-mo-aops
    label: 1950 Miklós Schweitzer
---
For any system $ x_1,x_2,...,x_n$ of positive real numbers, let
$ f_1(x_1,x_2,...,x_n) = x_1$ ,
and
$ f_{\nu} = \frac {x_1 + 2x_2 + \cdots + \nu x_{\nu}}{\nu + (\nu - 1)x_1 + (\nu - 2)x_2 + \cdots + 1\cdot x_{\nu - 1}}$

for $ \nu = 2,3,...,n$ . Show that for any $ \epsilon > 0$ , a positive integer $ n_0 < n_0(\epsilon)$ can be found such that for every $ n > n_0$ there exists a system $ x_1',x_2',...,x_n'$ of positive real numbers
with $ x_1' + x_2' + \cdots + x_n' = 1$ and $ f_{\nu}(x_1',x_2',...,x_n')\le \epsilon$ for $ \nu = 1,2,...,n$ .
