---
tag: ZZNFM0AXTS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 CMIMC
    url: https://artofproblemsolving.com/community/c6h1221823
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13782
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2016
    source: hf-ai-mo-aops
    label: 2016 CMIMC
---
Given a list $A$ , let $f(A) = [A[0] + A[1], A[0] - A[1]]$ . Alef makes two programs to compute $f(f(...(f(A))))$ , where the function is composed $n$ times:

\begin{tabular}{l|l}
1: \textbf{FUNCTION} $T_1(A, n)$ & 1: \textbf{FUNCTION} $T_2(A, n)$
2: $ $ \textbf{IF} $n = 0$ & 2: $ $ \textbf{IF} $n = 0$
3: $ $ $ $ \textbf{RETURN} $A$ & 3: $ $ $ $ \textbf{RETURN} $A$
4: $ $ \textbf{ELSE} & 4: $ $ \textbf{ELSE}
5: $ $ $ $ \textbf{RETURN} $[T_1(A, n - 1)[0] + T_1(A, n - 1)[1],$ & 5: $ $ $ $ $B \leftarrow T_2(A, n - 1)$ $ $ $ $ $ $ $T_1(A, n - 1)[0] - T_1(A, n - 1)[1]]$ & 6: $ $ $ $ \textbf{RETURN} $[B[0] + B[1], B[0] - B[1]]$

\end{tabular}

Each time $T_1$ or $T_2$ is called, Alef has to pay one dollar. How much money does he save by calling $T_2([13, 37], 4)$ instead of $T_1([13, 37], 4)$ ?
