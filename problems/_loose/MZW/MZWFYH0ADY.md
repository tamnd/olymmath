---
tag: MZWFYH0ADY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3524363
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2556
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2025
    source: hf-ai-mo-aops
    label: 2025 China Team Selection Test
---
Let $k$ , $a$ , and $b$ , be fixed integers such that $0 \le a < k$ , $0 \le b < k+1$ , and $a$ , $b$ are not both zero.

The sequence $\{T_n\}_{n \ge k}$ satisfies $T_n = T_{n-1}+T_{n-2} \pmod{n}$ , $0 \le T_n < n$ , $T_k = a$ , and $T_{k+1} = b$ . Let the decimal expression of $T_n$ form a sequence $x=\overline{0.T_kT_{k+1} \dots}$ . For instance, when $k = 66, a = 5, b = 20$ , we get $T_{66}=5$ , $T_{67}=20$ , $T_{68}=25$ , $T_{69}=45$ , $T_{70}=0$ , $T_{71}=45, \dots$ , and thus $x=0.520545045 \dots$ .

Prove that $x$ is irrational.
