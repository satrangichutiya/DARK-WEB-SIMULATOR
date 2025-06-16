"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  CreditCard, 
  Smartphone, 
  FileText, 
  Database, 
  Zap, 
  Skull,
  Eye,
  Wallet,
  X,
  CheckCircle
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  icon: React.ReactNode;
  description: string;
  rating: number;
  seller: string;
  inStock: boolean;
  featured?: boolean;
}

const products: Product[] = [
  {
    id: "1",
    name: "💎 NON VBV CREDIT CARD COLLECTION EASY HIT",
    price: "2.5 BTC",
    category: "Financial",
    icon: <CreditCard className="w-8 h-8" />,
    description: "Ultra-premium platinum card data with unlimited limits - easy hit",
    rating: 5.0,
    seller: "PlatinumKing_99",
    inStock: true,
    featured: true
  },
  {
    id: "2", 
    name: "🌟 Diamond Passport Bundle",
    price: "15.0 BTC",
    category: "Documents",
    icon: <FileText className="w-8 h-8" />,
    description: "Luxury diplomatic passport templates with holographic seals - @SATHYA_0P",
    rating: 4.9,
    seller: "DiamondDoc_Elite",
    inStock: true,
    featured: true
  },
  {
  id: "3",
  name: "📱 I PHONE 15 PRO MAX",
  price: "8.5 BTC",
  category: "Electronics",
  icon: <Smartphone className="w-8 h-8 text-sky-400" />,
  description: "Limited edition platinum iPhone with custom firmware",
  rating: 4.8,
  seller: "LuxuryTech_VIP",
  inStock: false

  },
  {
    id: "4",
    name: "⚡ AI Quantum Breach Suite",
    price: "25.0 BTC",
    category: "Hacking",
    icon: <Database className="w-8 h-8" />,
    description: "Next-gen quantum decryption tools powered by AI - EDUCATIONAL DEMO",
    rating: 4.9,
    seller: "QuantumHacker_AI",
    inStock: true
  },
  {
    id: "5",
    name: "💀 Platinum Ransomware Kit",
    price: "50.0 BTC",
    category: "Malware",
    icon: <Skull className="w-8 h-8" />,
    description: "Military-grade encryption with AI persistence - FAKE EDUCATIONAL CODE",
    rating: 4.7,
    seller: "EliteMalware_Corp",
    inStock: true
  },
  {
    id: "6",
    name: "💳 Black Card Elite Pack",
    price: "1.5 BTC",
    category: "Financial",
    icon: <CreditCard className="w-8 h-8" />,
    description: "Exclusive black card data with platinum status - DEMO COLLECTION",
    rating: 4.6,
    seller: "BlackCard_Luxury",
    inStock: true
  }
];

interface DarkMarketplaceProps {
  onBackToTerminal?: () => void;
}

export function DarkMarketplace({ onBackToTerminal }: DarkMarketplaceProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showWallet, setShowWallet] = useState(false);
  const [purchaseComplete, setPurchaseComplete] = useState(false);
  const [balance] = useState("3.75 BTC");

  console.log("Dark marketplace component loaded");

  const handlePurchase = (product: Product) => {
    console.log("Purchase initiated for:", product.name);
    setSelectedProduct(product);
    setShowWallet(true);
  };

  const handlePayment = () => {
    console.log("Payment processed for:", selectedProduct?.name);
    setShowWallet(false);
    setPurchaseComplete(true);
    setTimeout(() => {
      setPurchaseComplete(false);
      setSelectedProduct(null);
    }, 3000);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Financial": return "text-neon-pink";
      case "Documents": return "text-neon-blue";
      case "Electronics": return "text-neon-red";
      case "Hacking": return "text-neon-blue";
      case "Malware": return "text-neon-red";
      default: return "text-white";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Luxury Background Effects */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/10 via-neon-red/5 to-neon-blue/10"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-neon-red/5 to-transparent"></div>
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, #ff006e, #0066ff, #ff3030)`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative z-10 border-b border-void-600 bg-void-800/50 backdrop-blur-sm"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-3xl font-terminal bg-gradient-to-r from-neon-pink via-neon-red to-neon-blue bg-clip-text text-transparent animate-slide-neon">
                PLATINUM VOID MARKET
              </div>
              <Badge className="bg-gradient-to-r from-neon-pink to-neon-red text-white border-0 animate-pulse-glow">
                LUXURY DEMO
              </Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => setShowWallet(true)}
                variant="outline"
                className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white transition-all duration-300 shadow-neon-blue/30"
              >
                <Wallet className="w-4 h-4 mr-2" />
                {balance}
              </Button>
              
              {onBackToTerminal && (
                <Button
                  onClick={onBackToTerminal}
                  variant="outline"
                  className="border-neon-red text-neon-red hover:bg-neon-red hover:text-white transition-all duration-300"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Exit
                </Button>
              )}
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-8">
        {/* Welcome Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h1 className="text-5xl font-terminal bg-gradient-to-r from-neon-pink via-neon-red to-neon-blue bg-clip-text text-transparent mb-4 animate-pulse-glow">
            PLATINUM LUXURY COLLECTION
          </h1>
          <p className="text-gray-300 font-mono text-lg">
            Premium • Exclusive • Ultra-Rare (AI SIMULATION)
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, rotate: Math.random() * 2 - 1 }}
              className="group"
            >
              <Card className={`relative bg-gradient-to-br from-platinum-light/10 via-platinum-base/5 to-platinum-dark/10 border-2 border-platinum-base/30 backdrop-blur-md overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:shadow-platinum-glow ${
                product.featured ? 'ring-2 ring-neon-pink shadow-neon-pink' : ''
              } before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-full before:transition-transform before:duration-1000 group-hover:before:translate-x-0`}>
                <div className="p-6">
                  {/* Platinum Product Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`relative p-4 rounded-xl bg-gradient-to-br from-platinum-light to-platinum-dark shadow-platinum-glow ${getCategoryColor(product.category)} transform group-hover:rotate-y-12 transition-transform duration-300`}>
                      <div className="relative z-10">
                        {product.icon}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-xl"></div>
                    </div>
                    {product.featured && (
                      <Badge className="bg-gradient-to-r from-neon-pink to-neon-red text-white border-0 font-bold animate-pulse-glow">
                        ✨ PLATINUM
                      </Badge>
                    )}
                  </div>

                  {/* Platinum Product Info */}
                  <h3 className="text-xl font-mono bg-gradient-to-r from-white via-platinum-light to-white bg-clip-text text-transparent mb-3 group-hover:from-neon-pink group-hover:to-neon-blue transition-all duration-300">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 font-mono leading-relaxed">
                    {product.description}
                  </p>

                  {/* Product Details */}
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Seller:</span>
                      <span className="text-neon-blue font-mono font-bold">{product.seller}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Rating:</span>
                      <span className="text-neon-pink">{'★'.repeat(Math.floor(product.rating))} {product.rating}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Status:</span>
                      <span className={product.inStock ? "text-neon-blue font-bold" : "text-neon-red"}>
                        {product.inStock ? "✨ IN STOCK" : "❌ SOLD OUT"}
                      </span>
                    </div>
                  </div>

                  {/* Platinum Price and Action */}
                  <div className="flex items-center justify-between mt-6">
                    <div className="text-2xl font-terminal bg-gradient-to-r from-neon-pink via-neon-red to-neon-blue bg-clip-text text-transparent font-bold">
                      {product.price}
                    </div>
                    <Button
                      onClick={() => handlePurchase(product)}
                      disabled={!product.inStock}
                      className={`font-mono font-bold transition-all duration-300 ${
                        product.inStock 
                          ? 'bg-gradient-to-r from-neon-pink via-neon-red to-neon-blue text-white hover:scale-105 hover:shadow-luxury-pink' 
                          : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {product.inStock ? '💎 BUY PLATINUM' : '❌ SOLD OUT'}
                    </Button>
                  </div>
                </div>

                {/* Platinum Shine Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent animate-platinum-shine"></div>
                </div>
                
                {/* Luxury Border Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-neon-pink via-neon-red to-neon-blue rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* Wallet Modal */}
      <AnimatePresence>
        {showWallet && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-void-800 border border-void-600 rounded-lg p-6 max-w-md w-full relative"
            >
              <button
                onClick={() => setShowWallet(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-terminal bg-gradient-to-r from-neon-pink to-neon-blue bg-clip-text text-transparent mb-4">💎 PLATINUM WALLET</h3>
              
              <div className="space-y-4">
                <div className="bg-void-700 p-4 rounded border border-void-600">
                  <p className="text-sm text-gray-400 mb-1">Current Balance</p>
                  <p className="text-2xl font-terminal text-matrix-green">{balance}</p>
                </div>

                {selectedProduct && (
                  <div className="bg-void-700 p-4 rounded border border-void-600">
                    <p className="text-sm text-gray-400 mb-2">Purchase Details</p>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Item:</span>
                        <span className="text-white">{selectedProduct.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Price:</span>
                        <span className="text-neon-pink">{selectedProduct.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Network Fee:</span>
                        <span className="text-gray-400">0.001 BTC</span>
                      </div>
                    </div>
                  </div>
                )}

                <Button
                  onClick={handlePayment}
                  className="w-full bg-gradient-to-r from-neon-pink via-neon-red to-neon-blue hover:scale-105 text-white font-mono font-bold transition-all duration-300"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  💎 SEND PLATINUM PAYMENT
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  No transaction - No  payment will be processed
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Purchase Success Modal */}
      <AnimatePresence>
        {purchaseComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-void-800 border border-matrix-green rounded-lg p-6 max-w-md w-full text-center"
            >
              <CheckCircle className="w-16 h-16 text-matrix-green mx-auto mb-4 animate-neon-glow" />
              <h3 className="text-xl font-terminal bg-gradient-to-r from-neon-pink to-neon-blue bg-clip-text text-transparent mb-2">💎 PLATINUM TRANSACTION COMPLETE</h3>
              <p className="text-gray-400 mb-4">Your purchase has been processed</p>
              <div className="bg-void-700 p-3 rounded border border-void-600 font-mono text-sm">
                TX Hash: 0xDEADBEEF123456789
              </div>
              <p className="text-xs text-neon-red mt-4">
                ⚠️ PAYMENT SUCCESSFUL SCAM DONE- NO REAL PAYMENT OCCURRED
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Educational Footer */}
      <footer className="relative z-10 mt-16 border-t border-void-600 bg-void-800/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <div className="mb-4">
              <Badge className="bg-neon-red/20 text-neon-red border-neon-red mb-2">
                Real carding hub
              </Badge>
            </div>
            <div className="text-sm text-gray-400 space-y-1">
              <p>Made by: <span className="text-neon-blue">AAYUSH SIR</span> | Code written by: <span className="text-neon-blue">AYUSH SOR</span></p>
              <p>GitHub: <span className="text-matrix-green">@DEVGRAMOP</span> | Instagram: <span className="text-neon-pink">@WOXPC</span></p>
              <p>Source Code: <span className="text-neon-purple">@SATHYA_0P</span></p>
              <p className="text-neon-red font-bold mt-2">FOR PORTFOLIO & EDUCATIONAL PURPOSES ONLY</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
