---
tag: YKV401SVVF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248304
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Denote $\textrm{SL}_2 (\mathbb{Z})$ and $\textrm{SL}_3 (\mathbb{Z})$
the sets of matrices with $2$ rows and $2$ columns, respectively with $3$ rows and $3$ columns, with integer entries and their determinant equal to $1$.
$\textbf{(a)}$ Let $N$ be a positive integer and let $g$ be a matrix with $3$ rows and $3$ columns, with rational entries. Suppose that for each positive divisor $M$ of $N$ there exists a rational number $q_M$, a positive divisor $f (M)$ of $N$ and a matrix $\gamma_M \in \textrm{SL}_3 (\mathbb{Z})$ such that
$$ g = q_M \left(\begin{array}{ccc}
1 & 0 & 0\\
0 & 1 & 0\\
0 & 0 & f (M)
\end{array}\right) \gamma_M \left(\begin{array}{ccc}
1 & 0 & 0\\
0 & 1 & 0\\
0 & 0 & M^{}
\end{array}\right) . $$
Moreover, if $q_1 = 1$, prove that $\det (g) = N$ and $g$ has the following shape:
$$ g = \left(\begin{array}{ccc}
a_{11} & a_{12} & Na_{13}\\
a_{21} & a_{22} & Na_{23}\\
Na_{31} & Na_{32} & Na_{33}
\end{array}\right), $$
where $a_{ij}$ are all integers, $i, j \in \{ 1, 2, 3 \} .$

$\textbf{(b)}$ Provide an example of a matrix $g$ with $2$ rows and $2$ columns which satisfies the following properties:
$\bullet$ For each positive divisor $M$ of $6$ there exists a rational number $q_M$, a positive divisor $f (M)$ of $6$ and a matrix $\gamma_M \in \textrm{SL}_2 (\mathbb{Z})$ such that
$$ g = q_M \left(\begin{array}{cc}
1 & 0\\
0 & f (M)
\end{array}\right) \gamma_M \left(\begin{array}{cc}
1 & 0\\
0 & M^{}
\end{array}\right) $$
and $q_1 = 1$.

$\bullet$ $g$ does not have its determinant equal to $6$ and is not of the shape
$$ g = \left(\begin{array}{cc}
a_{22} & 6 a_{23}\\
6 a_{32} & 6 a_{33}
\end{array}\right), $$
where $a_{ij}$ are all positive integers, $i, j \in \{ 2, 3 \}$.

*(Radu Toma)*
