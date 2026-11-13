---
tag: MTPQBA6WTW
kind: problem
type: answer
answer: '[625,750]'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=133998
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
During a promotional period, a mall stipulates that all goods in the mall are sold at 80% of the marked price; at the same time, when customers spend a certain amount in the mall, they receive a corresponding amount of coupons according to the following scheme:
\begin{tabular}{|c|c|c|c|c|c|}
\hline Range of spending amount (CNY) & {$[200,400)$} & {$[400,500)$} & {$[500,700)$} & {$[700,900)$} & $\cdots$ \\
\hline Amount of coupons received (CNY) & 30 & 60 & 100 & 130 & $\cdots$ \\
\hline
\end{tabular}

According to the above promotional method, customers can receive double discounts when shopping in the mall. For example, if a customer buys a product marked at 400 CNY, the spending amount is 320 CNY, and the discount received is: $400 \times 0.2 + 30 = 110$ CNY. Suppose the discount obtained by purchasing a product is:
(1) If a customer buys a product marked at 1000 CNY, what is the discount rate the customer receives?
(2) For products with marked prices in the range $[500,800]$ CNY, what marked price of the product should a customer buy to receive a discount rate of no less than $\frac{1}{3}$?
(2002 Shanghai College Entrance Examination Question)
