
import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Connection {
  id: number;
  from: string;
  to: string;
  label: string;
  description: string;
}

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  color: string;
}

interface ConnectedEcosystemProps {
  nodes: Node[];
  connections: Connection[];
  className?: string;
}

const ConnectedEcosystem = ({
  nodes,
  connections,
  className
}: ConnectedEcosystemProps) => {
  const [selectedConnection, setSelectedConnection] = useState<Connection | null>(null);
  
  // Find a node by id
  const getNode = (id: string) => nodes.find(node => node.id === id);
  
  // Calculate line coordinates for a connection
  const getLineCoordinates = (connection: Connection) => {
    const fromNode = getNode(connection.from);
    const toNode = getNode(connection.to);
    
    if (!fromNode || !toNode) return null;
    
    return {
      x1: fromNode.x,
      y1: fromNode.y,
      x2: toNode.x,
      y2: toNode.y
    };
  };

  return (
    <div className={cn("relative w-full max-w-4xl mx-auto h-80 md:h-96", className)}>
      <svg className="w-full h-full" viewBox="0 0 1000 800">
        {/* Connections */}
        {connections.map((connection) => {
          const coords = getLineCoordinates(connection);
          if (!coords) return null;
          
          const isSelected = selectedConnection?.id === connection.id;
          
          return (
            <g key={connection.id}>
              <line
                x1={coords.x1}
                y1={coords.y1}
                x2={coords.x2}
                y2={coords.y2}
                stroke={isSelected ? "#8B5CF6" : "#CBD5E1"}
                strokeWidth={isSelected ? 3 : 2}
                strokeDasharray={isSelected ? "none" : "10,5"}
                className="transition-all duration-300"
                style={{ cursor: 'pointer' }}
                onClick={() => setSelectedConnection(connection)}
              />
              
              {/* Connection label */}
              <text
                x={(coords.x1 + coords.x2) / 2}
                y={(coords.y1 + coords.y2) / 2}
                textAnchor="middle"
                alignmentBaseline="middle"
                fill={isSelected ? "#8B5CF6" : "#64748B"}
                fontSize="14"
                className="pointer-events-none select-none"
              >
                {connection.label}
              </text>
            </g>
          );
        })}
        
        {/* Nodes */}
        {nodes.map((node) => (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r="50"
              fill={node.color}
              className="transition-all duration-300 hover:opacity-90"
            />
            <text
              x={node.x}
              y={node.y}
              textAnchor="middle"
              alignmentBaseline="middle"
              fill="#FFFFFF"
              fontSize="18"
              fontWeight="bold"
              className="pointer-events-none select-none"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
      
      {/* Connection details */}
      {selectedConnection && (
        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-10 backdrop-blur-md border border-white/20 rounded-lg p-4 max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <h4 className="font-semibold mb-2 text-center">
            {getNode(selectedConnection.from)?.label} → {getNode(selectedConnection.to)?.label}
          </h4>
          <p className="text-sm text-gray-200">{selectedConnection.description}</p>
        </motion.div>
      )}
    </div>
  );
};

export default ConnectedEcosystem;
