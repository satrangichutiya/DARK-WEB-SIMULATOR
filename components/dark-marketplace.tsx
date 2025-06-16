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
    description: "Next-gen quantum decryption tools powered by AI - FAST AND SECURE HACKED CARDS",
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
    description: "Military-grade encryption with ip persistence - WITH 100# REFUND GUARANTEE ",
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
    description: "Exclusive black card data with platinum status - power by nc hackers",
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
      case "Financial": return "text-blue-400";
      case "Documents": return "text-emerald-400";
      case "Electronics": return "text-purple-400";
      case "Hacking": return "text-cyan-400";
      case "Malware": return "text-red-400";
      default: return "text-white";
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      {/* Professional Background Effects */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-950 to-gray-900/80"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-blue-500/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative z-10 border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                PLATINUM VOID MARKET
              </div>
              <Badge className="bg-blue-500/10 text-blue-400 border border-blue-500/20">
                LUXURY DEMO
              </Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => setShowWallet(true)}
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400/10 transition-all duration-300"
              >
                <Wallet className="w-4 h-4 mr-2" />
                {balance}
              </Button>
              
              {onBackToTerminal && (
                <Button
                  onClick={onBackToTerminal}
                  variant="outline"
                  className="border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 transition-all duration-300"
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
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-4">
            PLATINUM LUXURY COLLECTION
          </h1>
          <p className="text-gray-400 font-medium text-lg">
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
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className={`relative bg-gray-900 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 group-hover:border-blue-400/50 ${
                product.featured ? 'ring-1 ring-blue-400' : ''
              }`}>
                <div className="p-6">
                  {/* Product Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`relative p-4 rounded-xl bg-gray-800 ${getCategoryColor(product.category)}`}>
                      <div className="relative z-10">
                        {product.icon}
                      </div>
                    </div>
                    {product.featured && (
                      <Badge className="bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium">
                        ✨ PLATINUM
                      </Badge>
                    )}
                  </div>

                  {/* Product Info */}
                  <h3 className="text-xl font-medium text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Product Details */}
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Seller:</span>
                      <span className="text-emerald-400 font-medium">{product.seller}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Rating:</span>
                      <span className="text-yellow-400">{'★'.repeat(Math.floor(product.rating))} {product.rating}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Status:</span>
                      <span className={product.inStock ? "text-emerald-400 font-medium" : "text-red-400"}>
                        {product.inStock ? "✨ IN STOCK" : "❌ SOLD OUT"}
                      </span>
                    </div>
                  </div>

                  {/* Price and Action */}
                  <div className="flex items-center justify-between mt-6">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                      {product.price}
                    </div>
                    <Button
                      onClick={() => handlePurchase(product)}
                      disabled={!product.inStock}
                      className={`font-medium transition-all duration-300 ${
                        product.inStock 
                          ? 'bg-gradient-to-r from-blue-500 to-emerald-500 text-white hover:shadow-lg' 
                          : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {product.inStock ? '💎 BUY PLATINUM' : '❌ SOLD OUT'}
                    </Button>
                  </div>
                </div>
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
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 max-w-md w-full relative"
            >
              <button
                onClick={() => setShowWallet(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-4">💎 PLATINUM WALLET</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-800 p-4 rounded border border-gray-700">
                  <p className="text-sm text-gray-400 mb-1">Current Balance</p>
                  <p className="text-2xl font-bold text-emerald-400">{balance}</p>
                </div>

                {selectedProduct && (
                  <div className="bg-gray-800 p-4 rounded border border-gray-700">
                    <p className="text-sm text-gray-400 mb-2">Purchase Details</p>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Item:</span>
                        <span className="text-white">{selectedProduct.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Price:</span>
                        <span className="text-blue-400">{selectedProduct.price}</span>
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
                  className="w-full bg-gradient-to-r from-blue-500 to-emerald-500 hover:shadow-lg text-white font-medium transition-all duration-300"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  💎 SEND PLATINUM PAYMENT
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  No transaction - No payment will be processed
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
              className="bg-gray-900 border border-emerald-400 rounded-lg p-6 max-w-md w-full text-center"
            >
              <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-2">💎 PLATINUM TRANSACTION COMPLETE</h3>
              <p className="text-gray-400 mb-4">Your purchase has been processed</p>
              <div className="bg-gray-800 p-3 rounded border border-gray-700 text-sm">
                TX Hash: 0xDEADBEEF123456789
              </div>
              <p className="text-xs text-red-400 mt-4">
                ⚠️ PAYMENT SUCCESSFUL CHECK UR MAIL FOR CONFIRMATION 👍
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Educational Footer */}
      <footer className="relative z-10 mt-16 border-t border-gray-800 bg-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <div className="mb-4">
              <Badge className="bg-red-500/10 text-red-400 border border-red-500/20 mb-2">
                EDUCATIONAL PURPOSES ONLY
              </Badge>
            </div>
            <div className="text-sm text-gray-400 space-y-1">
              <p>Made by: <span className="text-blue-400">AAYUSH SIR</span> | Code written by: <span className="text-blue-400">AYUSH SOR</span></p>
              <p>GitHub: <span className="text-emerald-400">@DEVGRAMOP</span> | Instagram: <span className="text-blue-400">@WOXPC</span></p>
              <p>Source Code: <span className="text-purple-400">@SATHYA_0P</span></p>
              <p className="text-red-400 font-medium mt-2">FOR PORTFOLIO & EDUCATIONAL PURPOSES ONLY</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
                       }
