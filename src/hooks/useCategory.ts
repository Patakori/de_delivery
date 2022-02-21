import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

import { apiAxios } from "../services/axios"

export interface PropsProducts {
    id: string,
    price: string,
    name: string,
    image?: any,
}[]

export interface PropsHighlights {
    id: string,
    image?: any,
}[]


export function useCategory<T = unknown>(url:string, options?:AxiosRequestConfig){

    const [popular, setPopular] = useState<PropsProducts[]>([])
    const [beats, setBeats] = useState<PropsProducts[]>([])
    const [returnable, setReturnable] = useState<PropsProducts[]>([])
    const [beer, setBeer] = useState<PropsProducts[]>([])
    const [spirits, setSpirits] = useState<PropsProducts[]>([])
    const [wine, setWine] = useState<PropsProducts[]>([])
    const [noAlcohol, setNoAlcohol] = useState<PropsProducts[]>([])
    const [shop, setShop] = useState<PropsProducts[]>([])
    const [foods, setFoods] = useState<PropsProducts[]>([])

    const [highlights, setHighlights] = useState<PropsHighlights[]>([])
  
    const [isFetching, setIsFetching] = useState(true)
    const [error, setError] = useState<Error | null>(null)
  
    async function popularData(){
      apiAxios.get('/api/products')
        .then(response => response.data.data.filter(function(data:any){
            return data.category === "popular"})
        .map((data:any) => {
        return setPopular(data.products)}))
        .catch(err => { setError(err) })
        .finally(() =>{ setIsFetching(true) })
    }
  
    async function beatsData(){
      apiAxios.get('/api/products')
        .then(response => response.data.data.filter(function(data:any){
            return data.category === "beats"})
        .map((data:any) => {
        return setBeats(data.products)}))
        .catch(err => { setError(err) })
        .finally(() =>{ setIsFetching(false) })
    }
  
    async function returnableData(){
      apiAxios.get('/api/products')
        .then(response => response.data.data.filter(function(data:any){
            return data.category === "returnable"})
        .map((data:any) => {
        return setReturnable(data.products)}))
        .catch(err => { setError(err) })
        .finally(() =>{ setIsFetching(false) })
    }
  
    async function beerData(){
      apiAxios.get('/api/products')
        .then(response => response.data.data.filter(function(data:any){
            return data.category === "beer"})
        .map((data:any) => {
        return setBeer(data.products)}))
        .catch(err => { setError(err) })
        .finally(() =>{ setIsFetching(false) })
    }
  
    async function spiritsData(){
      apiAxios.get('/api/products')
        .then(response => response.data.data.filter(function(data:any){
            return data.category === "spirits"})
        .map((data:any) => {
        return setSpirits(data.products)}))
        .catch(err => { setError(err) })
        .finally(() =>{ setIsFetching(false) })
    }
  
    async function wineData(){
      apiAxios.get('/api/products')
        .then(response => response.data.data.filter(function(data:any){
            return data.category === "wine"})
        .map((data:any) => {
        return setWine(data.products)}))
        .catch(err => { setError(err) })
        .finally(() =>{ setIsFetching(false) })
    }
  
    async function noAlcoholData(){
      apiAxios.get('/api/products')
        .then(response => response.data.data.filter(function(data:any){
            return data.category === "noAlcohol"})
        .map((data:any) => {
        return setNoAlcohol(data.products)}))
        .catch(err => { setError(err) })
        .finally(() =>{ setIsFetching(false) })
    }
  
    async function shopData(){
      apiAxios.get('/api/products')
        .then(response => response.data.data.filter(function(data:any){
            return data.category === "shop"})
        .map((data:any) => {
        return setShop(data.products)}))
        .catch(err => { setError(err) })
        .finally(() =>{ setIsFetching(false) })
    }
  
    async function foodslData(){
      apiAxios.get('/api/products')
        .then(response => response.data.data.filter(function(data:any){
            return data.category === "foods"})
        .map((data:any) => {
        return setFoods(data.products)}))
        .catch(err => { setError(err) })
        .finally(() =>{ setIsFetching(false) })
    }

    async function highlightsData(){
      apiAxios.get('/api/products')
        .then(response => response.data.data.filter(function(data:any){
            return data.category === "highlights"})
        .map((data:any) => {
        return setHighlights(data.products)}))
        .catch(err => { setError(err) })
        .finally(() =>{ setIsFetching(false) })
    }
  
    useEffect(()=>{
  
        popularData();
        beatsData();
        returnableData();
        beerData();
        spiritsData();
        wineData();
        noAlcoholData();
        shopData();
        foodslData();
        highlightsData();
  
    },[])
    

    return { popular, beats, returnable, beer, spirits, wine, noAlcohol, shop, foods, highlights, isFetching, error }
}