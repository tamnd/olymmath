---
tag: PA0EV4TG0V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h457415
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=3912
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206097
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2009
    source: hf-ai-mo-aops
    label: 2009 Olympic Revenge
---
Let $a, n \in \mathbb{Z}^{*}_{+}$ . $a$ is defined inductively in the base $n$ -*recursive*. We first write $a$ in the base $n$ , e.g., as a sum of terms of the form $k_tn^t$ , with $0 \le k_t < n$ . For each exponent $t$ , we write $t$ in the base $n$ -*recursive*, until all the numbers in the representation are less than $n$ . For instance, $1309 = 3^6 + 2.3^5 + 1.3^4 + 1.3^2 + 1.3 + 1$ $ = 3^{2.3} + 2.3^{3+2} + 1.3^{3+1} + 1.3^2 + 1$ Let $x_1 \in \mathbb{Z}$ arbitrary. We define $x_n$ recursively, as following: if $x_{n-1} > 0$ , we write $x_{n-1}$ in the base $n$ -*recursive* and we replace all the numbers $n$ for $n+1$ (even the exponents!), so we obtain the successor of $x_n$ . If $x_{n-1} = 0$ , then $x_n = 0$ .

Example: $x_1 = 2^{2^{2} + 2 + 1} + 2^{2+1} + 2 + 1$ $\Rightarrow x_2 = 3^{3^{3} + 3 + 1} + 3^{3+1} + 3$ $\Rightarrow x_3 = 4^{4^{4} + 4 + 1} + 4^{4+1} + 3$ $\Rightarrow x_4 = 5^{5^{5} + 5 + 1} + 5^{5+1} + 2$ $\Rightarrow x_5 = 6^{6^{6} + 6 + 1} + 6^{6+1} + 1$ $\Rightarrow x_6 = 7^{7^{7} + 7 + 1} + 7^{7+1}$ $\Rightarrow x_7 = 8^{8^{8} + 8 + 1} + 7.8^8 + 7.8^7 + 7.8^6 + ... + 7$ $.$ $.$ $.$ Prove that $\exists N : x_N = 0$ .
