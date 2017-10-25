(ns mandelbrot-cljs-app.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(def depth 20)

(defn calc [c z]
  (let [cx (:x c)
        cy (:y c)
        x (:x z)
        y (:y z)]
    {:x (+ cx (* x x) (- 0 (* y y)))
     :y (+ cy (* 2 x y))}))

(defn comp-size [c]
  (let [x (:x c)
        y (:y c)]
    (+ (* x x) (* y y))))

(defn mandelbrotbean [c z time]
  (cond
    (< 4 (comp-size z)) nil
    (< time 0) true
    :else (mandelbrotbean c (calc c z) (dec time))))


(defn mandelbrotbean? [[a i]]
  (mandelbrotbean {:x a :y i} {:x 0 :y 0} depth))

(def cell-size 800)

(def mandelbrots
  (doall (filter mandelbrotbean? (for [a (range -2 1 (/ 1.0 cell-size))
                                       i (range -1 1 (/ 1.0 cell-size))]
                                   [a i]))))
(defn setup []  
  (q/background 255 255 255))

(defn draw []
  (q/push-matrix)
  (q/stroke 50 0 100)
  (q/scale 0.5 0.5)
  (q/translate (* 2 cell-size) (* 1 cell-size))
  (doseq [c mandelbrots]
    (apply q/point (map #(* % cell-size) c)))
  (q/pop-matrix)
  (q/no-loop))

(q/defsketch mandelbrot-cljs-app
  :size [(* 1.5 cell-size) (* 1 cell-size)]
  :setup setup
  :draw draw)
